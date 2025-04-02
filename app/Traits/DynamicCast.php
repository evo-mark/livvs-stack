<?php

namespace App\Traits;

trait DynamicCast
{
    protected function getDynamicCastValueColumn(): string
    {
        return $this->dynamicCastValue ?? 'value';
    }

    protected function getDynamicCastTypeColumn(): string
    {
        return $this->dynamicCastType ?? 'type';
    }

    /**
     *  Fired after the inheriting model has been initialised
     */
    public function initializeDynamicCast()
    {
        if (! isset($this->casts[$this->getDynamicCastValueColumn()])) {
            $this->mergeCasts([
                $this->getDynamicCastValueColumn() => 'string',
            ]);
        }
    }

    protected function getCastType($key)
    {
        if ($key == $this->getDynamicCastValueColumn() && ! empty($this->{$this->getDynamicCastTypeColumn()})) {
            return $this->{$this->getDynamicCastTypeColumn()};
        } else {
            return parent::getCastType($key);
        }
    }
}
