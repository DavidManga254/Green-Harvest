<?php

namespace App\Http\Resources\Order;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'total_price' => $this->total,
            'shipping' => $this->shipping,
            'status' => $this->status,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'items' => OrderItemResource::collection($this->items),
            'statuses'=> $this->statuses,
            'user'=>$this->user,
            'address'=>$this->billingAddress,
            'notes'=>$this->notes
        ];
    }
}
