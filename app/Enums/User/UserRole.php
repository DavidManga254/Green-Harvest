<?php

namespace App\Enums\User;

enum UserRole: string
{
    case farmer = 'farmer';
    case consumer = 'consumer';
}