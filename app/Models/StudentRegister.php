<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentRegister extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'school_year_id',
        'status',
        'note',
        'kk',
        'akte',
        'ijazah_tk',
        'ktp',
    ];

    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id');
    }

    public function schoolYear()
    {
        return $this->belongsTo(SchoolYear::class, 'school_year_id');
    }

    public function transaction()
    {
        return $this->hasOne(Transaction::class, 'student_register_id');
    }
}
