/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'red': '#ef4444',
      'body': '#F7F6F4',
      'blue': {
        light:'#009FE0',
        dark:'#042756',
      },
    },
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
