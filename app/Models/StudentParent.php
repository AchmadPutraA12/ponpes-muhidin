<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentParent extends Model
{
    use HasFactory;

    protected $fillable = [
        'father',
        'mother',
        'wali',
        'father_occupation',
        'mother_occupation',
        'wali_occupation',
        'father_phone',
        'mother_phone',
        'wali_phone',
        'address_father',
        'address_mother',
        'address_wali',
        'choice',
    ];

    public function students()
    {
        return $this->hasOne(Student::class, 'student_parent_id');
    }
}
