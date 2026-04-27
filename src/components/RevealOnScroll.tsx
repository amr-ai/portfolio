import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    duration?: number;
    once?: boolean;
}

export const RevealOnScroll = ({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.5,
    once = true,
}: RevealOnScrollProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.2 });

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
            x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
