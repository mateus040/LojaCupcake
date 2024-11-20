<?php

namespace App\Http\Controllers;

use App\Http\Requests\Cupcake\CupcakeRequest;
use App\Http\Resources\Cupcake\CupcakeInfoResource;
use App\Http\Resources\Cupcake\CupcakeResource;
use App\Models\Cupcake;
use Illuminate\Support\Facades\Storage;

class CupcakeController extends Controller
{
    public function index()
    {
        $cupcakes = Cupcake::paginate();

        return CupcakeResource::collection($cupcakes);
    }

    public function store(CupcakeRequest $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $imagePath = $request
                ->file('image')
                ->store('cupcakes', 'public');
        }

        Cupcake::create([
            'name' => $validated['name'],
            'description' => $validated['description'],
            'ingredients' => $validated['ingredients'],
            'amount' => $validated['amount'],
            'quantity' => $validated['quantity'],
            'image' => $imagePath,
        ]);

        return response()->json([
            'message' => 'Cupcake successfully registered.'
        ], 201);
    }

    public function show(Cupcake $cupcake)
    {
        return new CupcakeInfoResource($cupcake);
    }

    public function update(CupcakeRequest $request, Cupcake $cupcake)
    {
        $validated = $request->validated();

        if ($request->hasFile('image')) {
            if ($cupcake->image) {
                Storage::disk('public')->delete($cupcake->image);
            }

            $imagePath = $request
                ->file('image')
                ->store('cupcakes', 'public');
        }

        $cupcake->update([
            'name' => $validated['name'],
            'description' => $validated['description'],
            'ingredients' => $validated['ingredients'],
            'amount' => $validated['amount'],
            'quantity' => $validated['quantity'],
            'image' => $imagePath ?? $cupcake->image
        ]);

        return response()->noContent();
    }

    public function destroy(Cupcake $cupcake)
    {
        if ($cupcake->image) {
            Storage::disk('public')->delete($cupcake->image);
        }

        $cupcake->delete();

        return response()->noContent();
    }
}
