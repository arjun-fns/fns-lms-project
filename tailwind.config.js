/** @type {import('tailwindcss').Config} */
module.exports = {
    parser: 'postcss-scss',
    content: [
       "./auth-ui/*.{html,js}",
       "./sanket/*.{html,js}",
       "./sanket/alpinemenu/*.{html,js}",
       "./manish/*.{html,js}",
       "./aditya/product-listing-2/*.{html,js}",

    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}