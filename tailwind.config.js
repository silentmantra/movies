/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js}",
    ],
    theme: {
        extend: {
            colors: {
                green: "var(--color-green)",
                blue: "var(--color-blue)",
                red: "var(--color-red)",
                purple: "var(--color-purple)",
            },
        },
    },
    plugins: [],
}
