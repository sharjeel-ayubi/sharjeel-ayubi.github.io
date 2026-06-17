import type { Config } from "tailwindcss";

/**
 * Design tokens live here so every component pulls from a single source of
 * truth. Colors mirror the "space graphite + Apple-Intelligence aurora"
 * palette documented in the README design system.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07070c",
        "ink-2": "#0b0b13",
        panel: "#12121b",
        text: "#f5f5f7",
        muted: "#9a9aa7",
        "muted-2": "#6c6c78",
        violet: "#7c5cff",
        indigo: "#5b8cff",
        cyan: "#34d7e0",
        magenta: "#c56bff",
        accent: "#7d8dff",
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"SF Pro Display"', "-apple-system", "sans-serif"],
        body: ["-apple-system", "BlinkMacSystemFont", '"SF Pro Text"', '"Segoe UI"', "Roboto", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderColor: {
        line: "rgba(255,255,255,0.08)",
        "line-2": "rgba(255,255,255,0.14)",
      },
      borderRadius: {
        card: "18px",
      },
      boxShadow: {
        float: "0 30px 80px -40px rgba(0,0,0,0.9)",
      },
      maxWidth: {
        site: "1120px",
      },
      backgroundImage: {
        aurora: "linear-gradient(110deg, #c56bff, #7c5cff, #5b8cff, #34d7e0)",
      },
      keyframes: {
        drift: { to: { transform: "translate3d(-40px, 30px, 0) scale(1.1)" } },
        shimmer: { to: { backgroundPosition: "200% center" } },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite alternate",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
