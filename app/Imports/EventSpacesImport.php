<?php

namespace App\Imports;

use App\Models\EventSpace;
use App\Models\Company; // Importa o modelo Company
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class EventSpacesImport implements ToCollection, WithHeadingRow
{
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            // Busca a empresa pelo nome
            $company = Company::where('name', $row['name'])->first(); // Ajuste 'name' conforme a coluna da planilha

            // Criação do espaço de evento com o company_id encontrado
            EventSpace::create([
                'company_id' => $company ? $company->id : null, // Usa o id ou null se não encontrar
                'name' => $row['name'],
                'city' => $row['city'],
                // 'state' => $row['state'],
                // 'zip_code' => $row['zip_code'],
                'address' => $row['address'],
                // 'capacity' => $row['capacity'],
                // 'phone' => $row['phone'],
                'type' => $row['type'],
                'description' => $row['description'],
                'linkedin' => $row['linkedin'],
                'instagram' => $row['instagram'],
                'facebook' => $row['facebook'],
                'tiktok' => $row['tiktok'],
                'pinterest' => $row['pinterest'],
                'flickr' => $row['flickr'],
                'youtube' => $row['youtube'],
                'email' => $row['email'],
                'whatsapp' => $row['whatsapp'],
                'tourist_region' => $row['tourist_region'],
                'room_count' => $row['room_count'],
                'bed_count' => $row['bed_count'],
                'distance_to_sea' => $row['distance_to_sea'],
                'dining_facilities' => $row['dining_facilities'],
                'other_facilities' => $row['other_facilities'],
                'services' => $row['services'],
                'accessible_rooms' => $row['accessible_rooms'],
                'accessible_type' => $row['accessible_type'],
                'total_event_area' => $row['total_event_area'],
                'largest_room_area' => $row['largest_room_area'],
                'largest_room_ceiling_height' => $row['largest_room_ceiling_height'],
                'pavilion_ceiling_height' => $row['pavilion_ceiling_height'],
                'smallest_event_room_area' => $row['smallest_event_room_area'],
                'total_rentable_event_rooms' => $row['total_rentable_event_rooms'],
                'direct_event_services' => $row['direct_event_services'],
                'other_rentable_spaces' => $row['other_rentable_spaces'],
                'parking_capacity' => $row['parking_capacity'],
                'top_5_events' => $row['top_5_events'],
                'accessibility_comments' => $row['accessibility_comments'],
                'sustainable_practices' => $row['sustainable_practices'],
                'pet_friendly' => $row['pet_friendly'],
                'pet_friendly_policy' => $row['pet_friendly_policy'],
            ]);
        }
    }
}
