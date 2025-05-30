<?php

namespace App\Models\ProduceImage;

use App\Models\Produce\Produce;
use Illuminate\Database\Eloquent\Model;

class ProduceImage extends Model
{
    protected $fillable=[
'image_path',
'produce_id'
    ];

    public function produce()
    {
        return $this->belongsTo(Produce::class);
    }


}