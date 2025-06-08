<!DOCTYPE html>
<html>

<head>
    <style>
        @layer base, components, vuetify, utilities;
    </style>
    @env('local')
    <!-- Vue Devtools server -->
    <script src="http://localhost:8098"></script>
    @endenv
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @vite(['resources/js/app.js'])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
