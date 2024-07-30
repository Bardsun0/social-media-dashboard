import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pageTransition, pageVariants } from "../utils/animations";

function Home() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen flex flex-col items-center justify-center p-4 text-text-light"
    >
      <h1 className="text-5xl font-heading font-bold mb-6">
        Welcome to Social Media Dashboard
      </h1>
      <p className="text-xl mb-8 max-w-2xl text-center">
        Manage your social media presence, schedule posts, and analyze your
        performance all in one place.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/login"
          className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition duration-300"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition duration-300"
        >
          Register
        </Link>
      </div>
    </motion.div>
  );
}

export default Home;
