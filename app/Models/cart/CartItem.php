<?php

namespace App\Models\cart;

use App\Models\cart\Cart;
use App\Models\Produce\Produce;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CartItem extends Model
{
    use HasFactory;

    protected $fillable = ['cart_id', 'produce_id', 'quantity', 'price'];

    /**
     * A cart item belongs to a cart.
     */
    public function cart(): BelongsTo
    {
        return $this->belongsTo(Cart::class);
    }

    /**
     * A cart item belongs to a produce.
     */
    public function produce(): BelongsTo
    {
        return $this->belongsTo(Produce::class);
    }
}
