<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExtracurricularSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $extracurriculars = [
            [
                'name' => 'Pramuka',
                'image' => 'ekstrakurikuler/pramuka.jpg',
                'description' => 'Pramuka adalah kegiatan pendidikan di luar sekolah yang bertujuan untuk mengembangkan karakter, keterampilan, dan kemampuan kepemimpinan siswa melalui kegiatan yang menarik dan menantang.'
            ],
            [
                'name' => 'Banjari',
                'image' => 'ekstrakurikuler/banjari.jpg',
                'description' => 'Banjari adalah salah satu seni musik tradisional yang menggunakan rebana dan diiringi oleh syair-syair Islami. Kegiatan ini mengajarkan siswa tentang kebudayaan dan seni musik.'
            ],
            [
                'name' => 'Silat',
                'image' => 'ekstrakurikuler/silat.jpg',
                'description' => 'Silat adalah seni bela diri tradisional Indonesia yang mengajarkan keterampilan bertahan dan menyerang, serta mengembangkan disiplin, konsentrasi, dan kekuatan fisik siswa.'
            ],
            [
                'name' => 'Melukis',
                'image' => 'ekstrakurikuler/melukis.jpg',
                'description' => 'Melukis adalah kegiatan seni rupa yang memungkinkan siswa untuk mengekspresikan kreativitas dan imajinasi mereka melalui penggunaan cat dan media lainnya.'
            ],
            [
                'name' => 'Bahasa Inggris',
                'image' => 'ekstrakurikuler/bahasainggris.jpg',
                'description' => 'Kegiatan ekstrakurikuler Bahasa Inggris bertujuan untuk meningkatkan kemampuan berbahasa Inggris siswa melalui berbagai aktivitas seperti percakapan, debat, dan permainan edukatif.'
            ]
        ];

        foreach ($extracurriculars as $extracurricular) {
            \App\Models\Extracurricular::create($extracurricular);
        }
    }
}
