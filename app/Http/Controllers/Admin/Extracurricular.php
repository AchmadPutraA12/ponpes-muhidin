<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Extracurricular as ModelsExtracurricular;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class Extracurricular extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $extracurricular = ModelsExtracurricular::all();
        return inertia('Admin/Extracurricular/Index', [
            'extracurricular' => $extracurricular
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Extracurricular/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg',
        ], [
            'name.required' => 'Nama wajib diisi',
            'description.required' => 'Deskripsi wajib diisi',
            'image.required' => 'Gambar wajib diunggah',
            'image.image' => 'File harus berupa gambar',
            'image.mimes' => 'Gambar harus berformat jpeg, png, atau jpg',
        ]);


        $foto = $request->file('image');
        $filename = time() . '.' . $foto->getClientOriginalExtension();
        $path = 'ekstrakurikuler/' . $filename;
        Storage::disk('public')->put($path, file_get_contents($foto));


        ModelsExtracurricular::create([
            'name' => $request->name,
            'description' => $request->description,
            'image' => $path
        ]);


        return redirect()->route('admin.extracurricular.index')->with('success', 'Ekstrakurikuler baru ditambahkan !');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ], [
            'name.required' => 'Nama wajib diisi',
            'description.required' => 'Deskripsi wajib diisi',
        ]);

        $ekstrakurikuler = ModelsExtracurricular::find($id);

        if ($ekstrakurikuler) {
            $ekstrakurikuler->update([
                'name' => $request->name,
                'description' => $request->description
            ]);


            if ($request->hasFile('image')) {
                if ($ekstrakurikuler->image) {
                    Storage::disk('public')->delete($ekstrakurikuler->image);
                }

                $foto = $request->file('image');
                $filename = time() . '.' . $foto->getClientOriginalName();
                $path = 'ekstrakurikuler/' . $filename;
                Storage::disk('public')->put($path, file_get_contents($foto));
                $ekstrakurikuler->update(['image' => $path]);
            }

            return redirect()->route('admin.extracurricular.index')->with('success', 'Ekstrakurikuler diperbarui !');
        } else {
            return redirect()->route('admin.extracurricular.index')->with('error', 'Ekstrakurikuler tidak ditemukan !');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $ekstrakurikuler = ModelsExtracurricular::find($id);
        if ($ekstrakurikuler) {
            if ($ekstrakurikuler->image) {
                Storage::disk('public')->delete($ekstrakurikuler->image);
            }
            $ekstrakurikuler->delete();
            return redirect()->route('admin.extracurricular.index')->with('success', 'Ekstrakurikuler dihapus !');
        } else {
            return redirect()->route('admin.extracurricular.index')->with('error', 'Ekstrakurikuler tidak ditemukan !');
        }
    }
}
