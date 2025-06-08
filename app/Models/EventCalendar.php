<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventCalendar extends Model
{
    use HasFactory;

    // Define a tabela associada ao modelo (opcional, se o nome do modelo corresponder ao nome da tabela no plural)
    protected $table = 'event_calendar';

    // Define os campos que podem ser preenchidos
    protected $fillable = [
        'name',
        'date',
        'month',
        'pax',
        'contact',
        'organization',
        'location',
        'website',
        'link',
        'content',
        'image',
        'publish',
    ];

    // Casts para tipos específicos
    protected $casts = [
        'date' => 'date',
        'publish' => 'boolean',
    ];
}
