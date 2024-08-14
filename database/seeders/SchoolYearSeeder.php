<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SchoolYearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $shchoolYears = [
            [
                'id' => 1,
                'first_year' => '2021',
                'last_year' => '2022',
                'is_active' => false,
                'quota' => 100
            ], [
                'id' => 2,
                'first_year' => '2022',
                'last_year' => '2023',
                'is_active' => true,
                'quota' => 100
            ]
        ];

        foreach ($shchoolYears as $schoolYear) {
            \App\Models\SchoolYear::create($schoolYear);
        }
    }
}
