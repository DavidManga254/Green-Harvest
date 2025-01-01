<?php

namespace App\Http\Requests\Produce;

use Illuminate\Foundation\Http\FormRequest;

class ProduceCreate extends FormRequest
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
        return  [
            'farmer_id' => ['required', 'exists:farmers,id'],
            'name' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'price_per_unit' => ['required', 'numeric', 'min:0'],
            'quantity' => ['required', 'integer', 'min:1'],
            'available_from' => ['required', 'date', 'after_or_equal:today'],
            'available_to' => ['required', 'date', 'after:available_from'],
        ];
    }
}
