<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ScheduleRegisterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $scheduleRegisters = [
            [
                'first_date' => '2022-09-01',
                'last_date' => '2022-09-30',
                'school_year_id' => 1
            ],
            [
                'first_date' => '2022-10-01',
                'last_date' => '2022-10-31',
                'school_year_id' => 2
            ]
        ];

        foreach ($scheduleRegisters as $scheduleRegister) {
            \App\Models\ScheduleRegister::create($scheduleRegister);
        }
    }
}
