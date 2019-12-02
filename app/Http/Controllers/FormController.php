<?php

namespace App\Http\Controllers;

use App\Models\Carbon;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function index()
    {
        return response(Carbon::all()->jsonSerialize(), 200);
    }

    public function store(Request $request)
    {
        $carbon = new Carbon();
        $carbon->name = $request->get('name');
        $carbon->address = $request->get('address');
        $carbon->save();

        return response($carbon->jsonSerialize(), 201);
    }

    public function update(Request $request, $id)
    {
        $carbon = Carbon::findOrFail($id);
        $carbon->address = $request->address;
        $carbon->save();

        return response(null, 200);
    }

    public function destroy($id)
    {
        Carbon::destroy($id);

        return response(null, 200);
    }
}
