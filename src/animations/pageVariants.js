export const pageVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -30,
    scale: 0.98,
    filter: "blur(8px)",

    transition: {
      duration: 0.45,
    },
  },
};