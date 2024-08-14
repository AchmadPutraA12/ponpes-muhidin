<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PaymentDetail;
use Illuminate\Http\Request;

class DetailPaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $detailPayment = PaymentDetail::all();
        return inertia(
            'Admin/DetailPayment/Index',

            [
                'detailPayment' => $detailPayment
            ]
        );
    }

    public function create()
    {
        return inertia('Admin/DetailPayment/Create');
    }


    public function store(Request $request)
    {
        $request->validate([
            'description' => 'required',
            'price' => 'required|numeric',
        ], [
            'description.required' => 'Deskripsi wajib diisi',
            'price.required' => 'Harga wajib diisi',
            'price.numeric' => 'Harga harus berupa angka',
        ]);


        PaymentDetail::create([
            'description' => $request->description,
            'price' => $request->price
        ]);


        return back()->with('success', 'Detail pembayaran ditambahkan');
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
        $detailPayment = PaymentDetail::find($id);

        $request->validate([
            'description' => 'required',
            'price' => 'required|numeric',
        ]);

        if ($detailPayment) {
            $detailPayment->update([
                'description' => $request->description,
                'price' => $request->price
            ]);
            return back()->with('success', 'Detail pembayaran di ubah');
        } else {
            return back()->with('error', 'Detail pembayaran tidak ditemukan');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $detailPayment = PaymentDetail::find($id);

        if ($detailPayment) {
            $detailPayment->delete();
            return back()->with('success', 'Detail pembayaran di hapus');
        } else {
            return back()->with('error', 'Detail pembayaran tidak ditemukan');
        }
    }
}
