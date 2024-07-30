import { motion } from "framer-motion";
import { FaCog } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-text-light p-4 fixed top-0 left-0 right-0 z-10 flex justify-between items-center"
    >
      <Link to="/" className="text-5xl font-heading font-bold">
        <span className="text-secondary">Social</span> Media{" "}
        <span className="text-accent font-accent">Dashboard</span>
      </Link>
      <nav>
        {user ? (
          <div className="flex items-center space-x-4">
            <Link
              to="/profile"
              className="text-white hover:text-accent transition duration-300"
            >
              <FaCog size={24} />
            </Link>
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                {user.displayName ? user.displayName[0].toUpperCase() : "U"}
              </div>
            </Link>
          </div>
        ) : (
          <div className="space-x-4">
            <Link
              to="/login"
              className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-primary-light text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-300"
            >
              Register
            </Link>
          </div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
