<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EquipeConselho extends Model
{
    protected $table = 'equipe_conselho';

    protected $fillable = [
        'nome',
        'cargo',
        'tipo',
        'imagem',
    ];
}