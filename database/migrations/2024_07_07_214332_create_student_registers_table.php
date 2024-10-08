<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('student_registers', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\Student::class, 'student_id');
            $table->foreignIdFor(\App\Models\SchoolYear::class, 'school_year_id');
            $table->string('status')->nullable();
            $table->string('note')->nullable();
            $table->string('kk')->nullable();
            $table->string('akte')->nullable();
            $table->string('ijazah_tk')->nullable();
            $table->string('ktp')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_registers');
    }
};
