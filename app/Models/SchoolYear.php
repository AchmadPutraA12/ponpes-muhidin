<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SchoolYear extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_year',
        'last_year',
        'quota',
        'is_active',
    ];

    public function scheduleRegister()
    {
        return $this->hasOne(ScheduleRegister::class);
    }

    public function students()
    {
        return $this->belongsTo(Student::class, 'student_registers')->withPivot('status', 'note', 'kk', 'akte', 'ijazah_tk', 'ktp');
    }
}
