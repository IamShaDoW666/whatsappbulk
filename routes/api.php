<?php

use App\Http\Controllers\Api\ApiController;
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
  
    Route::post('/send-message', [ApiController::class,'messageText']);
    Route::post('/send-media', [ApiController::class,'messageMedia']);
    Route::post('/send-button', [ApiController::class,'messageButton']);
    Route::post('/send-template', [ApiController::class,'messageTemplate']);
    Route::post('/send-list', [ApiController::class,'messageList']);
    
});
Route::post('/generate-qr', [ApiController::class,'generateQr']);


Route::post('/save-number', function(Request $request) {
    $data = [
        'api_key' => 'gOrVxlAxnlwGJLJ8o3iXyKg5uNXJJ8',
        'sender' => '917012749946',
        'number' => '917902708908',
        'message' => json_encode($request->all())
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
