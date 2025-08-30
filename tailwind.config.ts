import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
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
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// EnviroCorp 2070 Custom Colors
				space: {
					deep: 'hsl(var(--space-deep))',
					void: 'hsl(var(--space-void))',
					nebula: 'hsl(var(--space-nebula))'
				},
				neon: {
					cyan: 'hsl(var(--neon-cyan))',
					teal: 'hsl(var(--neon-teal))',
					violet: 'hsl(var(--neon-violet))',
					gold: 'hsl(var(--neon-gold))',
					emerald: 'hsl(var(--neon-emerald))'
				},
				glass: {
					base: 'hsl(var(--glass-base))',
					surface: 'hsl(var(--glass-surface))',
					border: 'hsl(var(--glass-border))'
				},
				holo: {
					blue: 'hsl(var(--holo-blue))',
					cyan: 'hsl(var(--holo-cyan))'
				},
				text: {
					primary: 'hsl(var(--text-primary))',
					secondary: 'hsl(var(--text-secondary))',
					muted: 'hsl(var(--text-muted))',
					inverse: 'hsl(var(--text-inverse))'
				},
				status: {
					success: 'hsl(var(--success-glow))',
					warning: 'hsl(var(--warning-glow))',
					error: 'hsl(var(--error-glow))',
					info: 'hsl(var(--info-glow))'
				}
			},
			backgroundImage: {
				'gradient-space': 'var(--gradient-space)',
				'gradient-neon': 'var(--gradient-neon)',
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-holo': 'var(--gradient-holo)'
			},
			boxShadow: {
				'glow-cyan': 'var(--glow-cyan)',
				'glow-violet': 'var(--glow-violet)',
				'glow-gold': 'var(--glow-gold)',
				'glass': 'var(--shadow-glass)',
				'deep': 'var(--shadow-deep)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'spin-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'spin-slow': 'spin-slow 10s linear infinite',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;