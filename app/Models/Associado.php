<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Associado extends Model
{
    use HasFactory;

    protected $table = 'associados';

    protected $fillable = [
        'nome',
        'categoria',
        'imagem',
    ];

    /**
     * Definir os casts de atributos.
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
