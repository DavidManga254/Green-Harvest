<?php

namespace App\Http\Requests\Farmer;

use App\Enums\FarmingPractice;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RegisterFarmer extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required|email', Rule::exists('users', 'email')],
            'farm_name' => 'required|string',
            'farm_location' => 'required|string',
            'farm_description' => 'required|string',
            'growing_practices' => ['required', Rule::in(FarmingPractice::cases())],
            'certifications' => 'required|array',
            'profile_image' => 'file|required',
            'delivery_locations' => 'required|array',
            'delivery_locations.*' => 'string',
            'social_links' => 'array',
            'notes' => '',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
        ];
    }
}
