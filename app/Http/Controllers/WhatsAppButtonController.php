<?php

namespace App\Http\Controllers;

use App\Models\WhatsAppButton;

class WhatsAppButtonController extends Controller
{
    public function show()
    {
        $button = WhatsAppButton::latest()->first();

        if (!$button) {
            return response()->json(null, 204);
        }

        return response()->json([
            'id' => $button->id,
            'image_url' => basename($button->image_url), // só o nome do arquivo
            'whatsapp_link' => $button->whatsapp_link,
        ]);
    }
}
