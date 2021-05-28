<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Vue Stripe Shopping Cart Admin</title>

        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link type="text/css" rel="stylesheet" href="{{ mix('css/app.css') }}">
    </head>
    <body class="antialiased">
        <div class="container mx-auto">
            <div id="app">
                <div class="wrapper">
                    <header class="text-gray-700 body-font">
                        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <h1> Laravel Vue Stripe Shopping Cart Admin
                        </h1>
                        </div>
                    </header>
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
