/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'sb-bg': '#FFF5F8',
                'sb-primary': '#F3A6B8',
                'sb-dark': '#D97891',
                'sb-surface': '#FFFCFA',
                'sb-blue': '#BFDFF2',
                'sb-sage': '#B8D8C0',
                'sb-yellow': '#FFE9A8',
                'sb-text-main': '#4A3B40',
                'sb-text-sec': '#9A747F',
            },
            fontFamily: {
                sans: ['"Nunito"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}