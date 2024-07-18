const tailwindMotionsConfig = {
  theme: {
    extend: {
      keyframes: {
        "tranquillo-default": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(1)" },
        },
        "tranquillo-enter": {
          "0%": { transform: "translateX(0)", opacity: "0" },
          "20%": { transform: "translateX(0.2)", opacity: "1" },
          "100%": { transform: "translateX(1)", opacity: "1" },
        },
        "tranquillo-exit": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(1)" },
        },
        "brillante-default": {
          "0%": { transform: "translateX(0.4)" },
          "16%": { transform: "translateX(0.16)" },
          "30%": { transform: "translateX(0.3)" },
          "100%": { transform: "translateX(1)" },
        },
        "brillante-enter": {
          "0%": { transform: "translateX(0)", opacity: "0" },
          "30%": { transform: "translateX(0.3)", opacity: "0.9" },
          "100%": { transform: "translateX(1)", opacity: "1" },
        },
        "brillante-exit": {
          "0%": { transform: "translateX(0.5)" },
          "16%": { transform: "translateX(0.16)" },
          "100%": { transform: "translateX(1)" },
        },
        "linear-default": {
          "0%": { transform: "translateX(0.25)" },
          "25%": { transform: "translateX(0.25)" },
          "75%": { transform: "translateX(0.75)" },
          "100%": { transform: "translateX(0.75)" },
        },
      },
      animation: {
        "tranquillo-default":
          "tranquillo-default 0.3s cubic-bezier(0.3, 0, 0.4, 1)",
        "tranquillo-enter": "tranquillo-enter 0.2s cubic-bezier(0, 0, 0.2, 1)",
        "tranquillo-exit": "tranquillo-exit 1s cubic-bezier(0.3, 0, 1, 1)",
        "brillante-default":
          "brillante-default 1s cubic-bezier(0.4, 0.16, 0.3, 1)",
        "brillante-enter": "brillante-enter 0.9s cubic-bezier(0, 0, 0.3, 0.9)",
        "brillante-exit": "brillante-exit 1s cubic-bezier(0.5, 0.16, 1, 1)",
        "linear-default": "linear-default 0.75s linear",
      },
    },
  },
  variants: {},
  plugins: [],
};

export default tailwindMotionsConfig;
