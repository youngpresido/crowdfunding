<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Funding extends Model
{
    protected $table='funding';
    protected $guarded=['id'];

    public function paid(){
        return $this->hasMany('App\Accept','funding_id');
    }
    public function user(){
        return $this->belongsTo('App\User');
    }
}
