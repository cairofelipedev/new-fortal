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
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-JNJ6T89HVC"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-JNJ6T89HVC');
    </script>
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead

    <!-- Google Translate -->
    <div id="google_translate_element" style="display: none;"></div>

    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'pt',
                includedLanguages: 'pt,en,es',
                autoDisplay: false
            }, 'google_translate_element');
        }

        function eraseCookie(name) {
            document.cookie = name + '=; Max-Age=-99999999;';
        }

        function applyLanguageByUrl() {
            const path = window.location.pathname;

            const map = {
                '/en': 'en',
                '/es': 'es',
                '/pt': 'reset', // Forçar reset da tradução
            };

            const lang = map[path];

            const tryTranslate = () => {
                const select = document.querySelector('.goog-te-combo');
                if (!select) return false;

                if (lang === 'reset') {
                    const hasTranslation = document.cookie.includes('googtrans=/pt');
                    if (hasTranslation) {
                        eraseCookie('googtrans');
                        location.reload();
                    }
                    return true;
                }

                select.value = lang;
                select.dispatchEvent(new Event('change'));
                return true;
            };

            let attempts = 0;
            const interval = setInterval(() => {
                if (tryTranslate() || attempts > 20) {
                    clearInterval(interval);
                }
                attempts++;
            }, 100);
        }

        window.addEventListener('load', () => {
            setTimeout(applyLanguageByUrl, 1000);
        });
    </script>

    <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

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