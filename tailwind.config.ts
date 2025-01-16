import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-sans)'],
  		},
  		colors: {
  			primary: {
  				main: '#298f98',
  				light: '#33b3bd',
  				dark: '#1f6b72',
  			},
  			secondary: {
  				main: '#982937',
  				light: '#bd3344',
  				dark: '#721f29',
  			},
  			gray: {
  				50: '#f8fafa',
  				100: '#edf1f1',
  				200: '#e1e7e7',
  				300: '#c2cdcd',
  				400: '#94a3a3',
  				500: '#708484',
  				600: '#4b5959',
  				700: '#363f3f',
  				800: '#242929',
  				900: '#121414',
  			},
  			status: {
  				success: '#2a9844',
  				warning: '#f0b429',
  				error: '#e12d39',
  				info: '#2563eb',
  			},
  		},
  		width: {
  			'sidebar-expanded': '250px',
  			'sidebar-collapsed': '64px',
  		},
  		height: {
  			'header': '64px',
  		},
  	}
  },
  plugins: [],
};
export default config;
