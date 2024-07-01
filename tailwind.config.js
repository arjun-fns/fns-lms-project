/** @type {import('tailwindcss').Config} */
module.exports = {
    parser: 'postcss-scss',
    content: [
        //    "./sanket/alpinemenu/*.{html,js}",
        //    "./lk-navbar/*.html",
        "./*.html",       // All files in the root directory
        "./*/*.html",     // All files in folders directly under the root directory
        "./**/*.html",    // All files in any folder at any depth under the root directory
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}