/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      'animation': {
        'text':'text 10s ease infinite',
        
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      
    },

    'keyframes': {
        'text': {
            '0%': {
               'background-size':'300% 300%',
                'background-position': '300% 0%'
            },
            '50%': {
               'background-size':'300% 300%',
                'background-position': '24% 100%'
            },
            '100%': {
              'background-size':'300% 300%',
               'background-position': '300% 0%'
           }
        },
        
    } 
   }
  },
  plugins: [],
}



