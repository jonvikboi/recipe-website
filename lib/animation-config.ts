// Centralized animation configuration
export const springConfig = {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
};

export const staggerConfig = {
    staggerChildren: 0.1,
    delayChildren: 0.2,
};

export const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: springConfig
    },
};

export const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: staggerConfig,
    },
};
