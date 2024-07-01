/** @type {import('tailwindcss').Config} */
module.exports = {
    parser: 'postcss-scss',
    content: [
       "./auth-ui/*.{html,js}",
       "./sanket/*.{html,js}",
       "./sanket/alpinemenu/*.{html,js}",
       "./manish/patil/*.{html,js}",

    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}