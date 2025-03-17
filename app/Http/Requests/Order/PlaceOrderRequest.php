<?php

namespace App\Http\Requests\Order;

use Illuminate\Foundation\Http\FormRequest;

class PlaceOrderRequest extends FormRequest
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
            'items' => 'required|array',
            'items.*.produce_id' => 'required|exists:produce,id',
            'items.*.quantity' => 'required|integer|min:1',
            'payment_method' => 'required|in:mpesa,stripe,paypal',
            'discount' => 'numeric|min:0|max:100',
        ];
    }
}