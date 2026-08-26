<?php

namespace App\Http\Controllers;

use App\Facades\MetaService;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController
{
    public function __invoke(): Response
    {
        MetaService::setTitle(title: 'Welcome to LIVVS');

        return Inertia::render('Dashboard');
    }
}
