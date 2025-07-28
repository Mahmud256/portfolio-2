import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react"; // or use any icon you want
import useTheme from "./useTheme";

const ScrollToTop = () => {
    const [show, setShow] = useState(false);

    const { bgColor } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 right-6 z-50 p-3 rounded-full text-white shadow-lg "
                    style={{
                        backgroundColor: bgColor,
                    }}
                >
                    <ArrowUp size={20} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
