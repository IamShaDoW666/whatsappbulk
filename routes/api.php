<?php

use App\Http\Controllers\Api\ApiController;
use App\Models\Contact;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', function() {
    $user = User::find(1);
    $number = $user->numbers->where('body', '9482390')->first();
    if (!$number) {
        return;
    }    
});

Route::middleware('checkApiKey')->group(function () {
    Route::post('/send-message', [ApiController::class, 'messageText']);
    Route::post('/send-media', [ApiController::class, 'messageMedia']);
    Route::post('/send-button', [ApiController::class, 'messageButton']);
    Route::post('/send-template', [ApiController::class, 'messageTemplate']);
    Route::post('/send-list', [ApiController::class, 'messageList']);
});
Route::post('/generate-qr', [ApiController::class, 'generateQr']);

Route::post('/notify-customer', function (Request $request) {

    $validated = $request->validate([
        'api_key' => 'required|string',
        'sender' => 'string',
        'number' => 'string',
        'message' => 'string'
    ]);

    $user = User::where('api_key', $request->api_key)->first();

    //Stop if api key doesn't match
    if (!$user) {
        return;
    }

    $number = $user->numbers->where('body', $request->sender)->first()->body ?? null;
    if (!$number) return;
    // $number = $user->numbers->first()->body;

    $data = [
        'api_key' => $request->api_key,
        'sender' => $number,
        'number' => $request->number,
        'message' => $request->message
    ];
    $payload = [
        'form_params' => $data
    ];
    $client = new \GuzzleHttp\Client(['http_errors' => false]);
    $client->request('POST', 'http://65.2.191.198/send-message', $payload);
});

Route::post('/save-number', function (Request $request) {
    $validated = $request->validate([
        'api_key' => 'required|string',
        'number' => 'string',
        'group' => 'string',
        'name' => 'string'
    ]);

    $user = User::where('api_key', $request->api_key)->first();

    //Stop if api key doesn't match
    if (!$user) {
        return;
    }

    $tag = $user->tags()->with('contacts')->where('name', $request->group)->first();
    if (!$tag) {
        $tag = Tag::create([
            'user_id' => $user->id,
            'name' => $request->group
        ]);
    }

    $alreadyExists = $tag->contacts->where('number', $request->number)->first();
    if (!$alreadyExists) {
        Contact::create([
            'user_id' => $user->id,
            'tag_id' => $tag->id,
            'name' => $request->name,
            'number' => $request->number
        ]);
    }
});
