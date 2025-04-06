<?php

namespace App\Http\Requests\Farmer;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFarmerRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'farm_name' => 'sometimes|string|max:255',
            'farm_location' => 'sometimes|string|max:255',
            'farm_description' => 'nullable|string',
            'growing_practices' => 'nullable|array',
            'certifications' => 'nullable|array',
            'primary_products' => 'nullable|string',
            'seasonal_availability' => 'nullable|array',
            'delivery_options' => 'nullable|boolean',
            'delivery_locations' => 'nullable|array',
            'profile_image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'social_links' => 'nullable|array',
            'notes' => 'nullable|string',
        ];
    }
}
