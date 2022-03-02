module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'midnight': '#02111b',
      'dawn': 'rgb(255, 251, 238)',
      'dawn-text': '#2F0601',
      'dawn-nav': 'rgba(255,255,255, 0.25)',
      'dawn-title': '#280003',
      'dawn-highlight': '',
      'dawn-components': '#6E7E85',
      'metal': '#3f404580',
      'dark-oak': '#30292f',
      'blue-gum': '#5d737e',
      'lavander-blush': '#F3E8EE',
      'maximum-red': '#D62828',
      'morning-blue': '#8AB0AB',
      'pastel-jade': '#73AB84',
      'cafe-latte': '#A38560',
      'sun': '#FFE787',
      'moon': '#292F36'
    },
    screens: {
      '2xsm': '320px',
      'xsm' : '375px',
      'sm': '425px',
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
  fontFamily: {
    html: [
      'M PLUS Rounded 1c'
    ],
  },
  plugins: [],
}
