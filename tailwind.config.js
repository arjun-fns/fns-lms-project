/** @type {import('tailwindcss').Config} */
module.exports = {
    parser: 'postcss-scss',
    content: [
       "./auth-ui/*.{html,js}",
       "./sanket/*.{html,js}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}