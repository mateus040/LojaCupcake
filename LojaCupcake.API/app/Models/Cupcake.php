<?php

namespace App\Models;

use App\Services\FirebaseStorageService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cupcake extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'ingredients',
        'amount',
        'quantity',
        'image',
    ];

    protected $appends = ['image_url'];

    public function getFotoUrlAttribute()
    {
        $firebaseStorage = app(FirebaseStorageService::class);
        return $firebaseStorage->getFileUrl($this->foto);
    }
}
