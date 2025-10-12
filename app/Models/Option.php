<?php

namespace App\Models;

use App\Traits\DynamicCast;
use App\Traits\LogsModelActivity;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Option extends Model
{
    use DynamicCast, HasFactory, LogsModelActivity;

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
