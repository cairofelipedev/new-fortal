<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Associado extends Model
{
    use HasFactory;

    protected $table = 'associados';

    protected $fillable = [
        'nome',
        'categoria',
        'imagem',
        'content'
    ];

    /**
     * Definir os casts de atributos.
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    protected static function boot()
    {
        parent::boot();

        static::saving(function ($associado) {
            if (empty($associado->slug)) {
                $associado->slug = Str::slug($associado->nome);
            }
        });
    }
}
