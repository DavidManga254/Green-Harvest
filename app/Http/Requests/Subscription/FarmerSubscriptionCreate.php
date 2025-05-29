<?php

namespace App\Http\Requests\Subscription;

use Illuminate\Foundation\Http\FormRequest;

class FarmerSubscriptionCreate extends FormRequest
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
            'subscription_plan_template_id' => 'required|exists:subscription_plan_templates,id',
            'cover_image' => 'required|string|url',
            'is_active' => 'sometimes|boolean',

            'items' => 'nullable|array',
            'items.*.produce_id' => 'required|exists:produces,id',
        ];
    }
}
