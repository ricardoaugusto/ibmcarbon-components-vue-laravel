<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CarbonUIController extends Controller
{
    public function index()
    {
        return view('carbonui');
    }
}
