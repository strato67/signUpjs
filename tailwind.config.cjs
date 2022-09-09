module.exports = {
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
    themes:['synthwave'],
    plugins: [
        require('@tailwindcss/forms'),
        require("daisyui")
    ],
};