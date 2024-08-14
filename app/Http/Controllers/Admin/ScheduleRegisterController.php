<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ScheduleRegister;
use App\Models\SchoolYear;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ScheduleRegisterController extends Controller
{

    public function index()
    {
        $scheduleRegister = ScheduleRegister::with('SchoolYear')->get();
        $scheduleRegister->transform(function ($scheduleRegister) {
            // $scheduleRegister->first_date
            //     = Carbon::createFromFormat('Y-m-d', $scheduleRegister->first_date)->translatedFormat('d F Y');
            // $scheduleRegister->last_date = Carbon::createFromFormat('Y-m-d', $scheduleRegister->last_date)->translatedFormat('d F Y');
            return $scheduleRegister;
        });

        $schoolYear = SchoolYear::doesntHave('scheduleRegister')->get();


        return inertia('Admin/ScheduleRegister/Index', [
            'scheduleRegister' => $scheduleRegister,
            'schoolYear' => $schoolYear
        ]);
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
                'first_date' => 'required',
                'last_date' => 'required',
                'school_year_id' => 'required',
            ],
            [
                'first_date.required' => 'Tahun awal wajib diisi',
                'last_date.required' => 'Tahun akhir wajib diisi',
                'school_year_id.required' => 'Tahun pelajaran wajib diisi',
            ]
        );


        ScheduleRegister::create([
            'first_date' => $request->first_date,
            'last_date' => $request->last_date,
            'school_year_id' => $request->school_year_id
        ]);

        return redirect()->back()->with('success', 'Tahun pelajaran baru ditambahkan');
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
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'first_date' => 'required',
            'last_date' => 'required',

        ]);

        $scheduleRegister = ScheduleRegister::find($id);

        if ($scheduleRegister) {
            $scheduleRegister->update([
                'first_date' => $request->first_date,
                'last_date' => $request->last_date
            ]);
            return back()->with('success', 'Tahun pelajaran di ubah');
        } else {
            return back()->with('error', 'Tahun pelajaran tidak ditemukan');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $scheduleRegister = ScheduleRegister::find($id);

        if ($scheduleRegister) {
            $scheduleRegister->delete();
            return back()->with('success', 'Tahun pelajaran di hapus');
        } else {
            return back()->with('error', 'Tahun pelajaran tidak ditemukan');
        }
    }
}
