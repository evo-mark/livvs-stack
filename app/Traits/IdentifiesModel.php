<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Relations\Relation;

trait IdentifiesModel
{
    public function identifyModel(string $type, int $id)
    {
        $modelClass = collect(Relation::morphMap())->get($type);

        return $modelClass::findOrFail($id);
    }
}
