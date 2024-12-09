/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "p-DesaturatedDarkCyan": "hsl(180, 29%, 50%)",
                "n-LightGrayishCyanBackground": "hsl(180, 52%, 96%)",
                "n-LightGrayishCyanFilterTablets": "hsl(180, 31%, 95%)",
                "n-DarkGrayishCyan": "hsl(180, 8%, 52%)",
                "n-VeryDarkGrayishCyan": "hsl(180, 14%, 20%)",
            },
            fontSize: {
                mainSize: "15px",
            },
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
            container: {
                center: true,
                padding: "10px",
                screens: {
                    sm: "540px",
                    md: "720px",
                    lg: "960px",
                    xl: "1140px",
                    "2xl": "1320px",
                },
            },
            animation: {
                fade: "fade .2s linear ",
            },
            keyframes: {
                fade: {
                    "0%": {
                        transform: "translateY(-10px)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                },
            },
        },
    },
    plugins: [],
};
