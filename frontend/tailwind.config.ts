import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        shop: {
          primary: '#B83A3A',
          secondary: '#E3AA5A',
          accent: '#9F3C2D',
          background: '#FFF8EA',
          foreground: '#4A3C31',
          muted: '#F5E9D9',
          border: '#E8D5B5',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        slideInX: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        slideOutX: {
          '0%': { transform: 'scaleX(1)' },
          '100%': { transform: 'scaleX(0)' },
        },
        slideInY: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        slideOutY: {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'in-x': 'slideInX 0.5s ease forwards',
        'out-x': 'slideOutX 0.5s ease forwards',
        'in-y': 'slideInY 0.5s ease forwards',
        'out-y': 'slideOutY 0.5s ease forwards',
      },
      transitionDelay: {
        '0': '0ms',
        '500': '500ms',
        '1000': '1000ms',
        '1500': '1500ms',
      },
      boxShadow: {
        card: '0 2px 10px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'rajasthani-pattern':
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggZD0iTTIwLDIwIEwzMCwxMCBMNDAsMjAgTDMwLDMwIFoiIHN0cm9rZT0iI0UzQUE1QSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNNTAsMzAgTDYwLDIwIEw3MCwzMCBMNjAsNDAgWiIgc3Ryb2tlPSIjOUYzQzJEIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMCw1MCBMMzAsNDAgTDQwLDUwIEwzMCw2MCBaIiBzdHJva2U9IiM5RjNDMkQiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTUwLDcwIEw2MCw2MCBMNzAsNzAgTDYwLDgwIFoiIHN0cm9rZT0iI0UzQUE1QSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjIiLz48L3N2Zz4=')",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
