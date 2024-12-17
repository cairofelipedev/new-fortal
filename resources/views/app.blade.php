<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>Fortaleza Meetings - Visite Ceará</title>

    <!-- SEO Meta Tags -->
    <meta name="description" content="Conheça Fortaleza, terra onde o sol brilha o ano todo e as oportunidades de negócios florescem em um ambiente acolhedor, dinâmico e diversificado.">
    <meta name="keywords" content="">
    <meta name="author" content="Cairo Codes">

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Fortaleza Meetings - Visite Ceará">
    <meta property="og:description" content="Conheça Fortaleza, terra onde o sol brilha o ano todo e as oportunidades de negócios florescem em um ambiente acolhedor, dinâmico e diversificado.">
    <meta property="og:image" content="https://fortalezameetings.com.br/images/logo.jpg">
    <meta property="og:url" content="https://fortalezameetings.com.br">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Fortaleza Meetings - Visite Ceará">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>