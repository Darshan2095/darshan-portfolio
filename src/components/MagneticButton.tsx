"use client";

import { motion } from "framer-motion";

export default function MagneticButton({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
        >
            {children}
        </motion.div>
    );
}