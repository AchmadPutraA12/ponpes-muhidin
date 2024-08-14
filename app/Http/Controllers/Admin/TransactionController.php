<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SchoolYear;
use App\Models\Student;
use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $transactions = Transaction::with('studentRegister.student.user')->get();
        $schoolYear = SchoolYear::all();
        $transformedTransactions = $transactions->map(function ($transaction) {
            return [
                'id' => $transaction->id,
                'nis' => $transaction->studentRegister->student->nis,
                'student_id' => $transaction->studentRegister->student->id,
                'student_register_id' => $transaction->student_register_id,
                'invoice' => $transaction->invoice,
                'amount' => $transaction->amount,
                'date' => $transaction->date,
                'status' => $transaction->status,
                'created_at' => $transaction->created_at,
                'updated_at' => $transaction->updated_at,
                'first_year' => $transaction->studentRegister->schoolYear->first_year,
                'last_year' => $transaction->studentRegister->schoolYear->last_year,
                'name' => $transaction->studentRegister->student->user->name,
            ];
        });


        return inertia('Admin/Transaction/Index', [
            'transaction' => $transformedTransactions,
            'schoolYears' => $schoolYear
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
        $transaction = Transaction::findOrFail($id);

        if ($request->has('status')) {
            $transaction->update([
                'status' => $request->status
            ]);
            return back()->with('success', 'status transaksi berhasil diperbarui');
        } else {
            return back()->with('error', 'status transaksi gagal diperbarui');
        }
    }

    public function updateNIS(Request $request, string $id)
    {
        $student = Student::findOrFail($id);
        $schoolYear = SchoolYear::with('scheduleRegister')->where('is_active', true)->first();
        if ($request->has('nis')) {
            $student->update([
                'nis' => $request->nis
            ]);

            $schoolYear->update([
                'quota' => $schoolYear->quota - 1
            ]);

            return back()->with('success', 'NIS siswa berhasil diperbarui');
        } else {
            return back()->with('error', 'NIS siswa gagal diperbarui');
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
