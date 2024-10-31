<?php

if (! function_exists('enum')) {
    /**
     * Unwrap a backed enum with fallback for string values
     */
    function enum(string|BackedEnum $input): ?string
    {
        return $input instanceof BackedEnum ? $input->value : $input;
    }
}
