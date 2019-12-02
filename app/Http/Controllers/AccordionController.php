<?php

namespace App\Http\Controllers;

use Faker\Generator;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class AccordionController extends Controller
{
    public function index()
    {
        $accordion = new Collection();
        $accordion->put('open1', true);
        $accordion->put('open2', false);
        $accordion->put('open3', false);
        $accordion->put('open4', true);

        return response($accordion->jsonSerialize(), 200);
    }

    public function create(Generator $faker)
    {
        return response(true, 200);
    }

    public function update(Request $request, $id)
    {
        return response(true, 200);
    }

    public function destroy($id)
    {
        return response(true, 200);
    }
}
