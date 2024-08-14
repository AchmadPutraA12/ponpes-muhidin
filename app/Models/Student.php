<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = ['gender', 'birth_date', 'address', 'nis', 'student_prev_school_id', 'student_parent_id', 'user_id'];

    public function prevSchool()
    {
        return $this->belongsTo(StudentPrevSchool::class, 'student_prev_school_id');
    }

    public function parent()
    {
        return $this->belongsTo(StudentParent::class, 'student_parent_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function schoolYears()
    {
        return $this->belongsToMany(SchoolYear::class, 'student_registers')
            ->withPivot('status', 'note', 'kk', 'akte', 'ijazah_tk', 'ktp');
    }
}
