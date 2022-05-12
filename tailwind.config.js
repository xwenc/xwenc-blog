module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        back: "#e8eaef",
        front: "#1f1f1f",
        lead: "#eee841",
        "lead-text": "#1f1f1f",
        line: "#cfd1d7",
        "skill-1": "#9079db",
        "skill-2": "#e58b5f",
        "skill-3": "#3ba1db",
        "back-light": "#ffffff"
      },
      spacing: {
        14: "3.5rem",
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      borderRadius: {
        lg: "1rem",
      },
    },
  },
};
