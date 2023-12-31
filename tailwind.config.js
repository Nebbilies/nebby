/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                comicsans: ['Comic Sans MS', 'Comic Sans', 'cursive'],
                mplus: ['"M PLUS Rounded 1c"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

