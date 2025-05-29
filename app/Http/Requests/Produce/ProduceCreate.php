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
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price_per_unit' => 'required|numeric|min:0',
            'quantity' => 'required|integer|min:1',
            'is_on_sale' => 'boolean',
            'discount' => 'nullable|numeric|min:0|max:100',
            'out_of_stock' => 'boolean',
            'available_from' => 'required|date',
            'available_to' => 'required|date|after_or_equal:available_from',
            'category_id' => 'required|exists:categories,id',
            'tags' => 'nullable|array',
            'tags.*' => 'string',
            'images' => 'nullable|array',
            // 'images.*' => 'image|mimes:jpeg,png,jpg,gif,webp|max:2048',
        ];
    }
}
