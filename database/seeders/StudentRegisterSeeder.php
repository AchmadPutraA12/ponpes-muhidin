<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StudentRegisterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $studentRegister = [
            [
                'student_id' => 1,
                'school_year_id' => 1,
                'status' => 'proses',
                'note' => null,
                'kk' => 'kk.jpg',
                'akte' => 'akte.jpg',
                'ijazah_tk' => 'ijazah_tk.jpg',
                'ktp' => 'ktp.jpg',
            ],

        ];

        foreach ($studentRegister as $studentRegister) {
            \App\Models\StudentRegister::create($studentRegister);
        }
    }
}
