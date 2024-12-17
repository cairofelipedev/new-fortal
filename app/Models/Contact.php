<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'job_title',
        'birthdate',
        'bio',
        'website',
        'personal_phone',
        'mobile_phone',
        'city',
        'state',
        'country',
        'twitter',
        'facebook',
        'linkedin',
        'tags',
        'id_company',
    ];

    protected $casts = [
        'tags' => 'array',
    ];
}
