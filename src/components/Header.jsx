import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white p-8 fixed top-0 left-0 right-0 z-10"
    >
      <h1 className="text-4xl font-bold text-center">Social Media Dashboard</h1>
    </motion.header>
  );
};

export default Header;