<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StudentPrevSchoolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $studentPrevSchools = [
            [
                'id' => 1,
                'name' => 'TK Muhammadiyah 1',
            ],

        ];

        foreach ($studentPrevSchools as $studentPrevSchool) {
            \App\Models\StudentPrevSchool::create($studentPrevSchool);
        }
    }
}
