import { motion } from "framer-motion";
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
      <h1 className="text-5xl font-heading font-bold mb-6 text-center">
        Welcome to Social Media Dashboard
      </h1>
      <p className="text-xl mb-8 max-w-2xl text-center">
        Manage your social media presence, schedule posts, and analyze your
        performance all in one place.
      </p>
      <p className="text-lg max-w-2xl text-center">
        Login or register to get started with your social media management
        journey!
      </p>
    </motion.div>
  );
}

export default Home;
