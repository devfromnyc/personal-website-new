const fadeIn = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
  },
  hidden: { opacity: 0, scale: 0 },
};
const fadeUp = {
  visible: {
    opacity: 1,
    scale: 1,
    transform: "translateY(0px)",
    transition: { duration: 0.8 },
  },
  hidden: { opacity: 0, scale: 0, transform: "translateY(100px)" },
};
const fadeLeft = {
  visible: {
    opacity: 1,
    scale: 1,
    transform: "translateX(0px)",
    transition: { duration: 0.8 },
  },
  hidden: { opacity: 0, scale: 0, transform: "translateX(-200px)" },
};
const perspective = {
  visible: {
    opacity: 1,
    scale: 1,
    transform: "perspective(1000px) rotateY(0)",
    transition: { duration: 1 },
  },
  hidden: {
    opacity: 0,
    scale: 0,
    backfaceVisibility: "hidden",
    transform: "perspective(1000px) rotateY(-100deg)",
  },
};

export { fadeIn, fadeUp, fadeLeft, perspective };
