/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                accent: '#fff',
                primary: '#0A0A0C',
                secondary: '#607b96',
            },
            fontFamily: {
                primary: ['Aclonica', 'sans-serif'],
                primary: ['Assistant', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
