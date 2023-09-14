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
    transform: "translateX(0px)",
    transition: { duration: 0.8 },
  },
  hidden: { opacity: 0, scale: 0, transform: "translateY(100px)" },
};
const perspective = {
  visible: {
    opacity: 1,
    scale: 1,
    transform: "perspective(2500px) rotateY(0)",
    transition: { duration: 1 },
  },
  hidden: {
    opacity: 0,
    scale: 0,
    backfaceVisibility: "hidden",
    transform: "perspective(2500px) rotateY(-100deg)",
  },
};

export { fadeIn, fadeUp, perspective };
