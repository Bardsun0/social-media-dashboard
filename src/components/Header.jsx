import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-text-light p-4 fixed top-0 left-0 right-0 z-10"
    >
      <h1 className="text-5xl font-heading font-bold text-center">
        <span className="text-secondary">Social</span> Media{" "}
        <span className="text-accent font-accent">Dashboard</span>
      </h1>
    </motion.header>
  );
};

export default Header;
