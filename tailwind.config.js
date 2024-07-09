/** @type {import('tailwindcss').Config} */
module.exports = {
    parser: 'postcss-scss',
    content: [
        "./auth-ui/*.{html,js}",
        "./sanket/*.{html,js}",
        "./sanket/alpinemenu/*.{html,js}",
        "./manish/*.{html,js}",

        "./siddhant/Add_New_Card/*.{html,js}",
        "./siddhant/address/*.{html,js}",
        "./siddhant/shoping-grid/*.{html,js}",
        "./siddhant/ord_cnf/*.{html,js}",
        "./siddhant/payment/*.{html,js}",
        "./siddhant/home-page1/*.{html,js}",
        "./siddhant/homepage2/*.{html,js}",
        "./prashant/Login/*.{html,js}",

    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}