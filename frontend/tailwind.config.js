/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: '#FAF9F8',
                surface: '#FFFFFF',
                foreground: '#1F2937', // Charcoal
                muted: '#6B7280',
                accent: '#4F46E5', // Indigo
                accentHover: '#4338CA',
                border: '#E5E7EB',
                success: '#10B981',
                warning: '#F59E0B',
                critical: '#EF4444',
                dark: {
                    background: '#09090B',
                    surface: '#18181B',
                    foreground: '#F4F4F5',
                    muted: '#A1A1AA',
                    border: '#27272A',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
