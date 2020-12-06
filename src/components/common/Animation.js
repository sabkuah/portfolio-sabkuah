export const pageWipe = {
  initial: {
    opacity: 0,
    y: "50%",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "-50%",
    scale: 1.2,
  },
};

export const pageFade = {
  initial: {
    opacity: 0.75,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0.75,
  },
};

export const pageTransition = {
  duration: 0.5,
  ease: "easeInOut",
  type: "anticipate",
};

export const pageTransitionSlow = {
  duration: 1,
  ease: "easeInOut",
  type: "anticipate",
};
