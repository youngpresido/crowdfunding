<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Accept extends Model
{
    protected $table='accept';
    protected $guarded=['id'];

    public function fund(){
        return $this->belongsTo('App\Funding', 'funding_id');
    }
}
