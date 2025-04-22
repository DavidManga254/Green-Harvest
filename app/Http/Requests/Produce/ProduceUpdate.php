<?php

namespace App\Http\Requests\Produce;

use Illuminate\Foundation\Http\FormRequest;

class ProduceUpdate extends FormRequest
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
            'name' => 'sometimes|string|max:255',
            'description' => 'sometimes|string|nullable',
            'price_per_unit' => 'sometimes|numeric|min:0',
            'quantity' => 'sometimes|integer|min:0',
            'is_on_sale' => 'sometimes|boolean',
            'discount' => 'sometimes|numeric|min:0|max:100',
            'out_of_stock' => 'sometimes|boolean',
            'available_from' => 'sometimes|date|nullable',
            'available_to' => 'sometimes|date|nullable',
            'category_id' => 'sometimes|exists:categories,id',
            'tags' => 'sometimes|array|nullable',
            'tags.*' => 'string|max:255',
        ];
    }
}
