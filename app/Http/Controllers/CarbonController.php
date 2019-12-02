<?php

namespace App\Http\Controllers;

use App\Models\Carbon;
use Faker\Generator;
use Illuminate\Http\Request;

class CarbonController extends Controller
{
    public function index()
    {
        return response(Carbon::all()->jsonSerialize(), 200);
    }

    public function create(Generator $faker)
    {
       $carbon = new Carbon();
       $carbon->name = $faker->name;
       $carbon->address = $faker->text;
       $carbon->status = 'Status 1';
       $carbon->save();

       return response($carbon->jsonSerialize(), 201);
    }

    public function update(Request $request, $id)
    {
        $carbon = Carbon::findOrFail($id);
        $carbon->gender = $request->gender;
        $carbon->save();

        return response(null, 200);
    }

    public function destroy($id)
    {
        Carbon::destroy($id);

        return response(null, 200);
    }
}
