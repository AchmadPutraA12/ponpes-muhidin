<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\PaymentDetail;
use App\Models\SchoolYear;
use App\Models\Student;
use App\Models\StudentRegister;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $user = Auth::user();
        $student = Student::with('parent', 'prevSchool', 'user')->where('user_id', $user->id)->first();
        $studentRegister = StudentRegister::with('student', 'transaction')->where('student_id', $student->id)->first();
        $detailPayment = PaymentDetail::sum('price');
        return inertia(
            'User/Dashboard/Index',
            [
                'detailPayment' => $detailPayment,
                'student' => $student,
                'studentRegister' => $studentRegister,

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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
