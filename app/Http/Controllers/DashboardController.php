<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Facades\MetaService;

class DashboardController
{
    public function __invoke(): Response
    {
        MetaService::setTitle(title: 'Welcome to LIVVS');

        return Inertia::render("Dashboard");
    }
}
