<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class Category extends Model
{
    protected $fillable = ['name','description','is_active'];
    protected $dates = ['deleted_at'];
    protected $casts = [
        'id' => 'string'
    ];
    public static function boot(){
        parent::boot();
        static::creating(function($obj){
            $obj->id = Uuid::uuid4();
        });
    }
    public $incrementing = false;
}


