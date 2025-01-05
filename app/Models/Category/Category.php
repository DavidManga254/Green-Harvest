<?php

namespace App\Models\Category;

use App\Models\Produce\Produce;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function products()
    {
        return $this->hasMany(Produce::class);
    }
}
