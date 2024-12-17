<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAdditionalFieldsToEventSpacesTableTree extends Migration
{
    public function up()
    {
        Schema::table('event_spaces', function (Blueprint $table) {
            $table->string('linkedin')->nullable();
            $table->string('instagram')->nullable();
            $table->string('facebook')->nullable();
            $table->string('tiktok')->nullable();
            $table->string('pinterest')->nullable();
            $table->string('flickr')->nullable();
            $table->string('youtube')->nullable();
            $table->string('email')->nullable();
            $table->string('whatsapp')->nullable();
            $table->string('tourist_region')->nullable();
            $table->string('room_count')->nullable();
            $table->string('bed_count')->nullable();
            $table->string('distance_to_sea')->nullable();
            $table->string('dining_facilities')->nullable();
            $table->string('other_facilities')->nullable();
            $table->string('services')->nullable();
            $table->string('accessible_rooms')->nullable();
            $table->string('accessible_type')->nullable();
            $table->string('total_event_area')->nullable();
            $table->string('largest_room_area')->nullable();
            $table->string('largest_room_ceiling_height')->nullable();
            $table->string('pavilion_ceiling_height')->nullable();
            $table->string('smallest_event_room_area')->nullable();
            $table->string('total_rentable_event_rooms')->nullable();
            $table->string('direct_event_services')->nullable();
            $table->string('other_rentable_spaces')->nullable();
            $table->string('parking_capacity')->nullable();
            $table->string('top_5_events')->nullable();
            $table->text('accessibility_comments')->nullable();
            $table->string('sustainable_practices')->nullable();
            $table->string('pet_friendly')->nullable();
            $table->text('pet_friendly_policy')->nullable();
        });
    }

    public function down()
    {
        Schema::table('event_spaces', function (Blueprint $table) {
            $table->dropColumn([
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
            ]);
        });
    }
}
