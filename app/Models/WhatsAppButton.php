<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WhatsAppButton extends Model
{
    protected $table = 'whatsapp_buttons';

    protected $fillable = [
        'image_url',
        'whatsapp_link',
    ];
}
