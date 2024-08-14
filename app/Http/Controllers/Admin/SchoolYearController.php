<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SchoolYear;
use Illuminate\Http\Request;

class SchoolYearController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $schoolYears = SchoolYear::all();
        return inertia(
            'Admin/SchoolYear/Index',
            [
                'schoolYears' => $schoolYears
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate(
            [
                'first_year' => 'required',
                'last_year' => 'required',
                'quota' => 'required|integer',
            ],
            [
                'first_year.required' => 'Tahun awal wajib diisi',
                'last_year.required' => 'Tahun akhir wajib diisi',
                'quota.required' => 'Kuota wajib diisi',
                'quota.integer' => 'Kuota harus berupa bilangan bulat',
            ]
        );


        SchoolYear::create([
            'first_year' => $request->first_year,
            'last_year' => $request->last_year,
            'quota' => $request->quota
        ]);

        return redirect()->back()->with('success', 'Tahun pelajaran baru ditambahkan');
    }


    public function updateStatus(Request $request, $id)
    {
        $schoolYear = SchoolYear::find($id);

        if ($schoolYear) {
            // Ensure the school year is related to a schedule register
            if (!$schoolYear->scheduleRegister()->exists()) {
                return redirect()->back()->with('error', 'Tahun Pelajaran tidak dapat diubah karena masih belum ada jadwal pendaftaran');
            }

            if ($request->status == 1) {
                // Deactivate all other school years
                SchoolYear::query()->update(['is_active' => 0]);


                $schoolYear->update(['is_active' => 1]);
                return redirect()->back()->with('success', 'Status Tahun Pelajaran diubah');
            } else {
                $schoolYear->update(['is_active' => 0]);
                $activeCount = SchoolYear::where('is_active', 1)->count();

                if ($activeCount == 0) {

                    $schoolYear->update(['is_active' => 1]);

                    return redirect()->back()->with('error', 'Harus ada satu Tahun Pelajaran yang aktif');
                }

                return redirect()->back()->with('success', 'Status Tahun Pelajaran diubah');
            }
        } else {
            return redirect()->back()->with('error', 'Tahun Pelajaran tidak ditemukan');
        }
    }


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
            'first_year' => 'required',
            'last_year' => 'required',
            'quota' => 'required|integer',
        ]);


        $schoolYear = SchoolYear::find($id);

        if ($schoolYear) {
            $schoolYear->update([
                'first_year' => $request->first_year,
                'last_year' => $request->last_year,
                'quota' => $request->quota
            ]);
            return redirect()->back()->with('success', 'Tahun pelajaran di ubah');
        } else {
            return redirect()->back()->with('error', 'Tahun pelajaran tidak ditemukan');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $schoolYear = SchoolYear::find($id);

        if ($schoolYear) {
            if ($schoolYear->is_active == 1) {
                return redirect()->back()->with('error', 'Tahun pelajaran aktif, tidak bisa di hapus');
            } else if ($schoolYear->scheduleRegister()->exists()) {

                return redirect()->back()->with('error', 'Tahun pelajaran memiliki jadwal, tidak bisa di hapus');
            }

            $schoolYear->delete();
            return redirect()->back()->with('success', 'Tahun pelajaran di hapus');
        } else {
            return redirect()->back()->with('error', 'Tahun pelajaran tidak ditemukan');
        }
    }
}
