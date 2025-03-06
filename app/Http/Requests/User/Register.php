<?php

namespace App\Http\Requests\User;

use App\Enums\User\UserRole;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class Register extends FormRequest
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
            'name' => 'required|max:300|string',
            'email' => ['email:rfc,dns', 'required', 'string', Rule::unique('users', 'email'),],
            'password' => 'required|string',
            'phone' => '|string|numeric',
            'role' => ['required', Rule::in(UserRole::cases())],
            'address' => 'string'
        ];
    }

    // protected function failedValidation(Validator $validator)
    // {
    //     throw new HttpResponseException(response()->json($validator->errors(), 422));
    // }

    // public function messages()
    // {
    //     return [
    //         'email.unique' => 'This email address is already registered.'
    //     ];
    // }
}
