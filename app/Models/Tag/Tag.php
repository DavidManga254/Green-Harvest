<?php

namespace App\Models\Tag;

use App\Models\Produce\Produce;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function produces()
    {
        return $this->belongsToMany(Produce::class, 'produce_tag');
    }
}
