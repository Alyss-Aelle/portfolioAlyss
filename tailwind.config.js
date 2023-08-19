/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "rgb(211, 228, 205)",
        
"secondary": "rgb(153, 167, 153)",
        
"accent": "rgb(242, 221, 193)",
        
"neutral": "rgb(226, 194, 185)",
        
"base-100": "#fcfcfd",
        
"info": "#81a7ea",
        
"success": "#0e7b38",
        
"warning": "#93630b",
        
"error": "#ea766c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

