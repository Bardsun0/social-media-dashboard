import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-text-light p-4 fixed top-0 left-0 right-0 z-10"
    >
      <Link to="/" className="text-5xl font-heading font-bold">
        <span className="text-secondary">Social</span> Media{" "}
        <span className="text-accent font-accent">Dashboard</span>
      </Link>
    </motion.header>
  );
};

export default Header;
