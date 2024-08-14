<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScheduleRegister extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_date',
        'last_date',
        'school_year_id',
    ];

    public function SchoolYear()
    {
        return $this->belongsTo(SchoolYear::class);
    }
}
