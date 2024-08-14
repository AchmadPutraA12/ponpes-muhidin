<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\PaymentDetail;
use App\Models\StudentRegister;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use LaravelDaily\Invoices\Invoice;
use LaravelDaily\Invoices\Classes\Buyer;
use LaravelDaily\Invoices\Classes\InvoiceItem;

use LaravelDaily\Invoices\Classes\Party;


class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $client = new Party([
            'name'          => 'Roosevelt Lloyd',
            'phone'         => '(520) 318-9486',
            'custom_fields' => [
                'note'        => 'IDDQD',
                'business id' => '365#GG',
            ],
        ]);

        $customer = new Party([
            'name'          => 'Ashley Medina',
            'address'       => 'The Green Street 12',
            'code'          => '#22663214',
            'custom_fields' => [
                'order number' => '> 654321 <',
            ],
        ]);

        $detailPayment = PaymentDetail::all();

        $items = [];

        $user = Auth::user()->student;

        $studenRegister = StudentRegister::where('student_id', $user->id)->with('transaction')->first();



        $detailPayment->map(function ($item) use (&$items) {
            $items[] = InvoiceItem::make($item->description)->pricePerUnit($item->price);
        });
        $notes = [
            'your multiline',
            'additional notes',
            'in regards of delivery or something else',
        ];
        $notes = implode("<br>", $notes);

        $invoice = Invoice::make('INVOICE')
            ->series('BIG')
            ->sequence(667)
            ->serialNumberFormat($studenRegister->transaction->invoice)
            ->seller($client)
            ->buyer($customer)
            ->payUntilDays(14)
            ->currencySymbol('Rp. ')
            ->currencyFormat('{SYMBOL}{VALUE}')
            ->currencyThousandsSeparator('.')
            ->currencyDecimalPoint(',')
            ->filename($client->name . ' ' . $customer->name)
            ->addItems($items)
            ->notes($notes)
            ->logo(public_path('Logo/logo.png'))
            ->save('public');

        $link = $invoice->url();

        return $invoice->stream();
    }




    /**
     * Store a newly created resource in storage.
     */


    /**
     * Display the specified resource.
     */
}
