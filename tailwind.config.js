module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            height: {
                screen: "100vh", // default
                dvh: "100dvh", // dynamic viewport
                lvh: "100lvh", // large viewport
                svh: "100svh", // small viewport
                fill: "-webkit-fill-available", // iOS Safari fallback
            },
            minHeight: {
                screen: "100vh",
                dvh: "100dvh",
                lvh: "100lvh",
                svh: "100svh",
                fill: "-webkit-fill-available",
            },
        },
    },
    plugins: [],
};
