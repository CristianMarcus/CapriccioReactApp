// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // ¡ESTA LÍNEA ES CRÍTICA! Debe apuntar a todos tus archivos de componentes.
    // Asegúrate de que las extensiones (.js, .ts, .jsx, .tsx) y la ruta (./src/**/) sean correctas.
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}