<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'address',
        'city',
        'state',
        'zip_code',
        'website',
        'publish',
    ];

    // Relacionamento com EventSpaces
    public function eventSpaces()
    {
        return $this->hasMany(EventSpace::class);
    }
}
