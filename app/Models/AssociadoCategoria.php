<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssociadoCategoria extends Model
{
    protected $table = 'associados_categorias';

    protected $fillable = ['nome', 'slug'];
}
