<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::resource('/cruds', 'CrudsController', [
//   'except' => ['edit', 'show', 'store']
// ]);
//users
Route::get('users', 'api\UserController@index');

Route::get('users/{id}', 'api\UserController@show');


Route::post('users','api\UserController@store');

Route::put('users','api\UserController@store');

Route::delete('users/{id}','api\UserController@destroy');
//accounts
Route::get('accounts', 'api\FundController@index');

Route::get('accounts/{id}', 'api\FundController@show');


Route::post('accounts','api\FundController@store');

Route::put('accounts','api\FundController@store');

Route::delete('accounts/{id}','api\FundController@destroy');
//myfunds
Route::get('program', 'api\AcceptController@index');

Route::get('program/{id}', 'api\AcceptController@show');


Route::post('program','api\AcceptController@store');

Route::put('program','api\AcceptController@store');

Route::delete('program/{id}','api\AcceptController@destroy');


//login
// Route::group(['middleware' => ['jwt.auth','api-header']], function () {
  
  // all routes to protected resources are registered here  
//   Route::get('auth/list', function(){
//       $users = App\User::all();
      
//       $response = ['success'=>true, 'data'=>$users];
//       return response()->json($response, 201);
//   });
// // Route::group(['middleware' => 'api-header'], function () {

//   // The registration and login requests doesn't come with tokens 
//   // as users at that point have not been authenticated yet
//   // Therefore the jwtMiddleware will be exclusive of them
  
  
// });
Route::post('auth/login', 'UserController@login');
Route::post('auth/logout', 'UserController@logout');
Route::post('auth/me', 'UserController@me');
Route::post('auth/refresh', 'UserController@refresh');