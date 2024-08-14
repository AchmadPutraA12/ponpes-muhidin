<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_register_id',
        'invoice',
        'amount',
        'date',
        'status'
    ];

    public function studentRegister()
    {
        return $this->belongsTo(StudentRegister::class);
    }
}
