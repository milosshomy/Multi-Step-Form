/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        marineBlue: "hsl(213, 96%, 18%)",
        purplishBlue: "hsl(243, 100%, 62%)",
        pastelBlue: "hsl(228, 100%, 84%)",
        lightBlue: "hsl(206, 94%, 87%)",
        strawberryRed: "hsl(354, 84%, 57%)",
        coolGray: "hsl(231, 11%, 63%)",
        lightGray: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
      },
      fontFamily: {
        ubuntu: "Ubuntu, sans-serif",
      },
      backgroundImage: {
        sidebarDesktop: "url('../img/bg-sidebar-desktop.svg')",
        sidebarMobile: "url('../img/bg-sidebar-mobile.svg')",
      },
    },
    screens: {
      sm: "414px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
