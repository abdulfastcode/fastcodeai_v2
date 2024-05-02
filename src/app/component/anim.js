export const menuSlide = {
    initial: { x: "100%" },
    enter: { x: "0", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } },
    exit: { x: "100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }
}

export const slide = {
    initial: { x: "80px" },
    enter: i => ({ x:"40px", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.08 * i } }),
    exit: i => ({ x: "80px", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 * i } })
}

export const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } }
}