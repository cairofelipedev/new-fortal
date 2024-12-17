<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RDToken extends Model
{
    use HasFactory;
    
    protected $table = 'rd_tokens';

    public $timestamps = false;

    protected $fillable = ['access_token', 'updated_at'];
}
