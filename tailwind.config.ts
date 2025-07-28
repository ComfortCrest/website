import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	safelist: [
		// Height & layout
		"min-h-[75dvh]",
		"h-[50vh]",
		"h-[40vh]",
		"pt-24",
		"pt-20",
		"flex",
		"items-center",
		"justify-center",
		"overflow-hidden",
		"relative",
		"absolute",
		"inset-0",
		"w-full",
		"h-full",
		"z-0",
		"z-10",
		"z-20",
		"text-center",
		"text-white",
		"px-4",
		"max-w-4xl",
		"mx-auto",

		// Typography
		"text-4xl",
		"md:text-6xl",
		"font-bold",
		"mb-6",
		"font-poppins",
		"text-xl",
		"md:text-2xl",
		"mb-8",
		"font-inter",
		"leading-relaxed",

		// Animations
		"fade-in-up",
		"delay-200",
		"delay-400",
		"animate-bounce",
		"animate-pulse",

		// Scroll indicator
		"bottom-8",
		"left-1/2",
		"-translate-x-1/2",
		"transform",
		"w-6",
		"h-10",
		"border-2",
		"border-white/50",
		"rounded-full",
		"justify-center",
		"w-1",
		"h-3",
		"bg-white/50",
		"mt-2",

		// Object-fit & interactivity
		"object-cover",
		"object-center",
		"select-none",
		"pointer-events-none",

		// Overlay
		"bg-black/40",
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
			fontFamily: {
				'Outfit': ['Outfit', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'sans': ['Outfit', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primaryYellow: "#f2d469",
				primaryRed:"#ff0000",
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-hero': 'var(--gradient-hero)',
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'soft': 'var(--shadow-soft)',
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
