<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PaymentDetail;
use App\Models\SchoolYear;
use App\Models\Student;
use App\Models\StudentRegister;
use App\Models\Transaction;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $studentRegister = StudentRegister::with('student.parent', 'student.prevSchool', 'student.user', 'schoolYear')->get();
        $schoolYear = SchoolYear::all();
        return inertia(
            'Admin/Student/Index',
            [
                'studentRegister' => $studentRegister,
                'schoolYears' => $schoolYear

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
        //
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

        $studentRegister = StudentRegister::find($id);

        $detailPayment = PaymentDetail::sum('price');

        if ($request->status === 'verifikasi') {
            $studentRegister->update([
                'status' => $request->status
            ]);

            if ($studentRegister) {
                $transaction = Transaction::create([
                    'student_register_id' => $studentRegister->id,
                    'amount' => $detailPayment,
                    'date' => now(),
                    'invoice' => 'INV-' . mt_rand(100000, 999999),
                ]);

                if ($transaction) {
                    return back()->with('success', 'Status di ubah');
                } else {
                    return back()->with('error', 'Status gagal di ubah');
                }
            }
        } else if ($request->status === 'gagal verifikasi') {
            $studentRegister->update([
                'status' => $request->status,
                'note' => $request->note
            ]);

            if ($studentRegister) {
                return back()->with('success', 'Status di ubah');
            } else {
                return back()->with('error', 'Status gagal di ubah');
            }
        }
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
