<?php

namespace App\Imports;

use App\Models\EventSpace;
use App\Models\Company;
use App\Models\EventType; // Importa o modelo EventType
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class EventSpacesImport implements ToCollection, WithHeadingRow
{
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            // Verifique se a chave 'linkedin' existe antes de acessar
            $linkedin = isset($row['linkedin']) ? $row['linkedin'] : null;

            // Busca a empresa pelo nome
            $company = Company::where('name', $row['name'])->first(); // Ajuste 'name' conforme a coluna da planilha

            // Busca o tipo de evento pelo nome
            $eventType = EventType::where('name', $row['type'])->first(); // Ajuste 'type' conforme o nome na planilha

            // Criação do espaço de evento com o company_id e event_type_id encontrados
            EventSpace::create([
                'company_id' => $company ? $company->id : null, // Usa o id ou null se não encontrar
                'name' => $row['name'],
                'city' => $row['city'],
                'address' => $row['address'],
                'respondent_full_name' => $row['respondent_full_name'], // Adicionando o campo respondent_full_name
                'respondent_whatsapp' => $row['respondent_whatsapp'], // Adicionando o campo respondent_whatsapp
                // 'type' => $eventType ? $eventType->id : null, // Aqui armazena o id do tipo de evento
                'type' => $row['type'],
                'description' => $row['description'],
                'linkedin' => isset($row['linkedin']) ? $row['linkedin'] : null, // Agora, você usa a variável $linkedin
                'instagram' => isset($row['instagram']) ? $row['instagram'] : null,
                'phone' => isset($row['phone']) ? $row['phone'] : null,
                'facebook' => isset($row['facebook']) ? $row['facebook'] : null,
                'tiktok' => isset($row['tiktok']) ? $row['tiktok'] : null,
                'pinterest' => isset($row['pinterest']) ? $row['pinterest'] : null,
                'flickr' => isset($row['flickr']) ? $row['flickr'] : null,
                'youtube' => isset($row['youtube']) ? $row['youtube'] : null,
                'email' => isset($row['email']) ? $row['email'] : null,
                'whatsapp' => isset($row['whatsapp']) ? $row['whatsapp'] : null,
                'tourist_region' => isset($row['tourist_region']) ? $row['tourist_region'] : null,
                'room_count' => isset($row['room_count']) ? $row['room_count'] : null,
                'bed_count' => isset($row['bed_count']) ? $row['bed_count'] : null,
                'distance_to_sea' => isset($row['distance_to_sea']) ? $row['distance_to_sea'] : null,
                'dining_facilities' => isset($row['dining_facilities']) ? $row['dining_facilities'] : null,
                'other_facilities' => isset($row['other_facilities']) ? $row['other_facilities'] : null,
                'services' => isset($row['services']) ? $row['services'] : null,
                'accessible_rooms' => isset($row['accessible_rooms']) ? $row['accessible_rooms'] : null,
                'accessible_type' => isset($row['accessible_type']) ? $row['accessible_type'] : null,
                'total_event_area' => isset($row['total_event_area']) ? $row['total_event_area'] : null,
                'largest_room_area' => isset($row['largest_room_area']) ? $row['largest_room_area'] : null,
                'largest_room_ceiling_height' => isset($row['largest_room_ceiling_height']) ? $row['largest_room_ceiling_height'] : null,
                'pavilion_ceiling_height' => isset($row['pavilion_ceiling_height']) ? $row['pavilion_ceiling_height'] : null,
                'smallest_event_room_area' => isset($row['smallest_event_room_area']) ? $row['smallest_event_room_area'] : null,
                'total_rentable_event_rooms' => isset($row['total_rentable_event_rooms']) ? $row['total_rentable_event_rooms'] : null,
                'direct_event_services' => isset($row['direct_event_services']) ? $row['direct_event_services'] : null,
                'other_rentable_spaces' => isset($row['other_rentable_spaces']) ? $row['other_rentable_spaces'] : null,
                'parking_capacity' => isset($row['parking_capacity']) ? $row['parking_capacity'] : null,
                'top_5_events' => isset($row['top_5_events']) ? $row['top_5_events'] : null,
                'accessibility_comments' => isset($row['accessibility_comments']) ? $row['accessibility_comments'] : null,
                'sustainable_practices' => isset($row['sustainable_practices']) ? $row['sustainable_practices'] : null,
                'pet_friendly' => isset($row['pet_friendly']) ? $row['pet_friendly'] : null,
                'pet_friendly_policy' => isset($row['pet_friendly_policy']) ? $row['pet_friendly_policy'] : null,
            ]);
        }
    }
}
