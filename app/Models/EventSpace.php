<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class EventSpace extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'name',
        'city',
        'state',
        'zip_code',
        'address',
        'capacity',
        'phone',
        'type',
        'description',
        'linkedin',
        'instagram',
        'facebook',
        'tiktok',
        'pinterest',
        'flickr',
        'youtube',
        'email',
        'whatsapp',
        'tourist_region',
        'room_count',
        'bed_count',
        'distance_to_sea',
        'dining_facilities',
        'other_facilities',
        'services',
        'accessible_rooms',
        'accessible_type',
        'total_event_area',
        'largest_room_area',
        'largest_room_ceiling_height',
        'pavilion_ceiling_height',
        'smallest_event_room_area',
        'total_rentable_event_rooms',
        'direct_event_services',
        'other_rentable_spaces',
        'parking_capacity',
        'top_5_events',
        'accessibility_comments',
        'sustainable_practices',
        'pet_friendly',
        'pet_friendly_policy',
        'image',
        'images',
        'floor_plan',
        'status',
        'publish',
    ];

    // Relacionamento com Company
    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    // Atributo mutador para imagens (JSON -> array)
    public function getImagesAttribute($value)
    {
        return json_decode($value, true);
    }

    public function setImagesAttribute($value)
    {
        $this->attributes['images'] = json_encode($value);
    }

    protected static function boot()
    {
        parent::boot();

        // Gera o slug automaticamente antes de salvar
        static::saving(function ($eventSpace) {
            $eventSpace->slug = Str::slug($eventSpace->name, '-');
        });
    }
}
