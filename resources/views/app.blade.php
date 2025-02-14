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

    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-PD7WNW7C');
    </script>
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PD7WNW7C"
            height="0" width="0" style="display:none;visibility:hidden">
        </iframe>
    </noscript>
    @inertia
</body>

</html>