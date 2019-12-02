<?php

namespace App\Models;

use Webpatser\Uuid\Uuid;

/**
 * Trait Uuids
 * @package App\Models
 */
trait Uuids
{

    /**
     * Boot function from Laravel
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->{$model->getKeyName()} = strtoupper(Uuid::generate(4)->string);
        });
    }
}
