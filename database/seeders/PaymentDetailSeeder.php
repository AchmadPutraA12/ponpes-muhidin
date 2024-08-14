<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaymentDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $paymentDetails = [
            [
                'description' => 'Pendaftaran dan Uang Gedung',
                'price' => 1350000
            ],
            [
                'description' => 'SPP',
                'price' => 125000
            ], [
                'description' => 'Seragam (4 Stel)',
                'price' => 600000,
            ],
            [
                'description' => 'Sampul Rapot',
                'price' => 50000
            ],
            [
                'description' => 'Atribut',
                'price' => 25000,
            ],
            [
                'description' => 'Uang Kegiatan (PHBI dan PHBN)',
                'price' => 250000
            ],
            [
                'description' => 'TPQ',
                'price' => 150000
            ]
        ];

        foreach ($paymentDetails as $paymentDetail) {
            \App\Models\PaymentDetail::create($paymentDetail);
        }
    }
}
