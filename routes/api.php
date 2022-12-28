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

    $user = User::where('api_key', $validated->api_key)->first();

    //Stop if api key doesn't match
    if (!$user) {
        return;
    }

    $number = $user->numbers->first()->body;

    $data = [
        'api_key' => $validated->api_key,
        'sender' => $number,
        'number' => $validated->number,
        'message' => $validated->message
    ];
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://65.2.191.198/send-message',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => json_encode($data),
        CURLOPT_HTTPHEADER => array(
            'Content-Type: application/json'
        ),
    ));

    $response = curl_exec($curl);

    curl_close($curl);
    echo $response;
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

    $tag = Tag::where('name', $validated->group)->first();
    if (!$tag) {
        $tag = Tag::create([
            'user_id' => $user->id,
            'name' => $validated->group
        ]);
    }
    $alreadyExists = Contact::where('number', $validated->number)->first();
    if (!$alreadyExists) {
        Contact::create([
            'user_id' => $user->id,
            'tag_id' => $tag->id,
            'name' => $validated->name,
            'number' => $validated->number
        ]);
    }
});
