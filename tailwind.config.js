import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                fortalorange: '#F57C29',
            },
            fontFamily: {
                'neulis': ['Neulis', 'sans-serif'],
                'urbanist': ['Urbanist', 'sans-serif'],
            },
        },
    },

    plugins:
        [
            forms,
            require('@tailwindcss/typography'),
        ]
};
