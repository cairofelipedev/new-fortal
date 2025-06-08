<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SessaoItem extends Model
{
    use HasFactory;

    protected $table = 'sessao_itens';

    protected $fillable = [
        'sessao_id',
        'titulo',
        'tipo',
        'arquivo',
        'link'
    ];

    public function sessao()
    {
        return $this->belongsTo(Sessao::class, 'sessao_id');
    }
}
