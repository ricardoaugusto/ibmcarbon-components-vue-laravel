<?php

Route::get('/', function () {
    return view('welcome');
});
Route::get('/carbon', 'CarbonUIController@index');
Route::get('/carbon/{any}', 'CarbonUIController@index')->where('any', '.*');
//Route::get('/carbon/{any}', 'CarbonUIController@index')->where('any', '[\/\w\.-]*');
