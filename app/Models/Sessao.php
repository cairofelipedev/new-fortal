<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sessao extends Model
{
    use HasFactory;

    protected $table = 'sessoes';

    protected $fillable = [
        'titulo',
        'subtitulo',
        'botao_texto',
        'botao_url',
        'pagina',
        'posicao'
    ];

    public function itens()
    {
        return $this->hasMany(SessaoItem::class, 'sessao_id');
    }
}
