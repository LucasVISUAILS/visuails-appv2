/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: ['dark'],
  theme: {
    container: { center: true, padding: '2rem', screens: { '2xl': '1400px' } },
    extend: {
      // shadcn-svelte's expected token names, wired to the VISUAILS HSL
      // bridge vars defined in src/app.css (:root). Anything shadcn-svelte
      // generates (button, dialog, accordion, ...) picks these up
      // automatically instead of shadcn's default slate theme.
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        // VISUAILS-named palette (matches the raw hex/rgba tokens in app.css
        // 1:1, for utility classes outside the shadcn primitives)
        vis: {
          bg: '#0F0E0C',
          'bg-deep': '#0A0908',
          'bg-raise': '#151311',
          surface: '#171512',
          'surface-2': '#1D1A17',
          ink: '#F4EFE7',
          brand: '#FF5B2E',
          'brand-2': '#FF6E43',
          'brand-bright': '#FF8A5C',
          success: '#63C79A'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', '"Times New Roman"', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif']
      },
      maxWidth: { container: '1240px' }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
