<?php

namespace App\Http\Controllers;

use App\Models\PaymentDetail;
use App\Models\ScheduleRegister;
use App\Models\SchoolYear;
use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    public function index()
    {
        $detailPayment = PaymentDetail::all();
        $total = PaymentDetail::Sum('price');
        return inertia(
            'Welcome',
            [
                'detailPayment' => $detailPayment,
                'total' => $total,
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
