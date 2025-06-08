<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Apoiador extends Model
{
    protected $table = 'apoiadores';

    protected $fillable = [
        'name',
        'img',
    ];
}
