<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StudentParentSeeder extends Seeder
{

    public function run(): void
    {
        $studentParents = [
            [
                'id' => 1,
                'father' => 'Abdul Ghoni',
                'father_occupation' => 'Pengusaha',
                'father_phone' => '081234567890',
                'mother' => 'Aisyah',
                'mother_occupation' => 'Pengusaha',
                'mother_phone' => '081234567890',
                'address_father' => 'Jalan Jalan',
                'address_mother' => 'Jalan Jalan',
                'choice' => 'orang tua',
            ],

        ];

        foreach ($studentParents as $studentParent) {
            \App\Models\StudentParent::create($studentParent);
        }
    }
}
