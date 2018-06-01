<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AcceptResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            'id'=>$this->id,
            'fund_name'=>$this->fund->title,
            'public_key'=>$this->fund->public_key,
            'name'=>$this->name,
            'amount'=>$this->amount,
            'email'=>$this->email,
            'created'=>$this->created_at,
            'updated'=>$this->updated_at,
        ];
    }
}
