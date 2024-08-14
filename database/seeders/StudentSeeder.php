<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $students = [
            [
                'id' => 1,
                'gender' => 'Laki-laki',
                'birth_date' => '2000-01-01',
                'address' => 'Jalan Jalan',
                'student_prev_school_id' => 1,
                'student_parent_id' => 1,
                'user_id' => 2
            ],
        ];

        foreach ($students as $student) {
            \App\Models\Student::create($student);
        }
    }
}
