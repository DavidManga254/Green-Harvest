<?php

namespace App\Http\Requests\Subscription;

use Illuminate\Foundation\Http\FormRequest;

class StoreSubscriptionPlanRequest extends FormRequest
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
            'plan_type' => 'required|in:standard,custom',
            'frequency' => 'required|in:weekly,bi-weekly,monthly',
            'payment_mode' => 'required|in:recurring,seasonal',
            'price' => 'required|numeric',
            'start_date' => 'required|date',
            'items' => 'nullable|array',
            'items.*.product_id' => 'required_if:plan_type,custom|exists:products,id',
            'items.*.quantity' => 'required_if:plan_type,custom|integer|min:1',
        ];
    }
}
