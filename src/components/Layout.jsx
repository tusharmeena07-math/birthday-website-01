import { motion } from "framer-motion";
import { pageVariants } from "../animations/pageVariants";

export default function Layout({ children }) {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="page-content">
    {children}
</div>
      </motion.div>
    </section>
  );
}