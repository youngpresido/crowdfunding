<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FundResource extends JsonResource
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
            'user_id'=>$this->user->name,
            'title'=>$this->title,
            'description'=>$this->desciption,
            'picture'=>$this->picture,
            'video'=>$this->video,
            'public_key'=>$this->public_key,
            'private_key'=>$this->private_key,
            'date'=>$this->date,
            'amount'=>$this->amount,
            'created'=>$this->created_at,
            'updated'=>$this->updated_at,
        ];
    }
}
