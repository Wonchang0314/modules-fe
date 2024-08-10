const tailwindMotionsConfig = {
  theme: {
    extend: {
      transitionTimingFunction: {
        "tranquillo-default": "cubic-bezier(0.3, 0, 0.4, 1)",
        "tranquillo-enter": "cubic-bezier(0, 0, 0.2, 1)",
        "tranquillo-exit": "cubic-bezier(0.3, 0, 1, 1)",
        "brillante-default": "cubic-bezier(0.4, 0.16, 0.3, 1)",
        "brillante-enter": "cubic-bezier(0, 0, 0.3, 0.9)",
        "brillante-exit": "cubic-bezier(0.5, 0.16, 1, 1)",
        "linear-default": "cubic-bezier(0.25, 0.25, 0.75, 0.75)",
      },
      transitionDuration: {
        "duration-01": "100ms",
        "duration-02": "150ms",
        "duration-03": "200ms",
        "duration-04": "250ms",
        "duration-05": "300ms",
        "duration-06": "350ms",
        "duration-07": "400ms",
        "duration-08": "450ms",
        "duration-09": "500ms",
        "duration-10": "550ms",
        "duration-11": "600ms",
        "duration-12": "700ms",
        "duration-13": "800ms",
      },
    },
  },
  variants: {},
  plugins: [],
};

export default tailwindMotionsConfig;
