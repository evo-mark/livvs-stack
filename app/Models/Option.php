<?php

namespace App\Models;

use App\Traits\DynamicCast;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Option extends Model
{
    use DynamicCast, HasFactory;

    protected $guarded = [];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function optionable(): MorphTo
    {
        return $this->morphTo();
    }
}
