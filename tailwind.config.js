const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/**
 * Custom palettes
 */
const customPalettes = {
  brand: {
    50: "#E3F2FD",
    100: "#BBDEFB",
    200: "#90CAF9",
    300: "#64B5F6",
    400: "#42A5F5",
    500: "#2196F3",
    600: "#1E88E5",
    700: "#1976D2",
    800: "#1565C0",
    900: "#0D47A1",
    DEFAULT: "#2196F3",
  },
};

/**
 * Themes
 */
const themes = {
  default: {
    primary: {
      ...colors.indigo,
      DEFAULT: colors.indigo[600],
    },
    accent: {
      ...colors.slate,
      DEFAULT: colors.slate[800],
    },
    warn: {
      ...colors.red,
      DEFAULT: colors.red[600],
    },
    "on-warn": {
      500: colors.red["50"],
    },
  },
  brand: {
    primary: customPalettes.brand,
  },
  teal: {
    primary: {
      ...colors.teal,
      DEFAULT: colors.teal[600],
    },
  },
  rose: {
    primary: colors.rose,
  },
  purple: {
    primary: {
      ...colors.purple,
      DEFAULT: colors.purple[600],
    },
  },
  amber: {
    primary: colors.amber,
  },
};

/**
 * Tailwind configuration
 */
const config = {
  darkMode: "class",
  content: ["./src/**/*.{html,scss,ts}"],
  important: true,
  theme: {
    fontSize: {
      xs: "0.625rem",
      sm: "0.75rem",
      md: "0.8125rem",
      base: "0.875rem",
      lg: "1rem",
      xl: "1.125rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "2.5rem",
      "7xl": "3rem",
      "8xl": "4rem",
      "9xl": "6rem",
      "10xl": "8rem",
    },
    screens: {
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },

      animation: {
        "spin-slow": "spin 3s linear infinite",
        fadeInUp: "fadeInUp 1s ease-out forwards",
        fadeInLeft: "fadeInLeft 1s ease-out forwards",
        fadeInRight: "fadeInRight 1s ease-out forwards",
      },
      colors: {
        gray: colors.slate,
        ...themes.default, // Add default theme colors
      },
      flex: {
        0: "0 0 auto",
      },
      fontFamily: {
        sans: `"Inter var", ${defaultTheme.fontFamily.sans.join(",")}`,
        mono: `"IBM Plex Mono", ${defaultTheme.fontFamily.mono.join(",")}`,
      },
      opacity: {
        12: "0.12",
        38: "0.38",
        87: "0.87",
      },
      rotate: {
        "-270": "270deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        270: "270deg",
      },
      scale: {
        "-1": "-1",
      },
      zIndex: {
        "-1": -1,
        49: 49,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        99: 99,
        999: 999,
        9999: 9999,
        99999: 99999,
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        50: "12.5rem",
        90: "22.5rem",
        100: "25rem",
        120: "30rem",
        128: "32rem",
        140: "35rem",
        160: "40rem",
        180: "45rem",
        192: "48rem",
        200: "50rem",
        240: "60rem",
        256: "64rem",
        280: "70rem",
        320: "80rem",
        360: "90rem",
        400: "100rem",
        480: "120rem",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
      },
      minHeight: ({ theme }) => ({
        ...theme("spacing"),
      }),
      maxHeight: {
        none: "none",
      },
      minWidth: ({ theme }) => ({
        ...theme("spacing"),
        screen: "100vw",
      }),
      maxWidth: ({ theme }) => ({
        ...theme("spacing"),
        screen: "100vw",
      }),
      transitionDuration: {
        400: "400ms",
      },
      transitionTimingFunction: {
        drawer: "cubic-bezier(0.25, 0.8, 0.25, 1)",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            '[class~="lead"]': {
              color: theme("colors.gray.600"),
            },
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: theme("colors.primary.600"),
              },
            },
            strong: {
              color: theme("colors.gray.900"),
            },
            "ol > li::before": {
              color: theme("colors.gray.600"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.400"),
            },
            hr: {
              borderColor: theme("colors.gray.200"),
            },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200"),
            },
            h1: {
              color: theme("colors.gray.900"),
            },
            h2: {
              color: theme("colors.gray.900"),
            },
            h3: {
              color: theme("colors.gray.900"),
            },
            h4: {
              color: theme("colors.gray.900"),
            },
            "figure figcaption": {
              color: theme("colors.gray.600"),
            },
            code: {
              color: theme("colors.gray.900"),
              fontWeight: "500",
            },
            "a code": {
              color: theme("colors.primary.500"),
            },
            pre: {
              color: theme("colors.white"),
              backgroundColor: theme("colors.gray.800"),
            },
            thead: {
              color: theme("colors.gray.900"),
              borderBottomColor: theme("colors.gray.200"),
            },
            "tbody tr": {
              borderBottomColor: theme("colors.gray.200"),
            },
          },
        },
        sm: {
          css: {
            code: {
              fontSize: "1em",
            },
            pre: {
              fontSize: "1em",
            },
            table: {
              fontSize: "1em",
            },
          },
        },
      }),
    },
  },
  corePlugins: {
    appearance: false,
    container: false,
    float: false,
    clear: false,
    placeholderColor: false,
    placeholderOpacity: false,
    verticalAlign: false,
  },
  plugins: [
    /*   require('@tailwindcss/typography')({ modifiers: ['sm', 'lg'] }), */
    // Custom plugin for theming
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--color-primary-50": theme("colors.primary.50"),
          "--color-primary-100": theme("colors.primary.100"),
          "--color-primary-200": theme("colors.primary.200"),
          "--color-primary-300": theme("colors.primary.300"),
          "--color-primary-400": theme("colors.primary.400"),
          "--color-primary-500": theme("colors.primary.500"),
          "--color-primary-600": theme("colors.primary.600"),
          "--color-primary-700": theme("colors.primary.700"),
          "--color-primary-800": theme("colors.primary.800"),
          "--color-primary-900": theme("colors.primary.900"),
          "--color-primary-DEFAULT": theme("colors.primary.DEFAULT"),
        },
      });
    },
  ],
};

module.exports = config;
