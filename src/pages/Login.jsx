import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: "-100vh" },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: "100vh" },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

function Login() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="password"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </motion.div>
  );
}

export default Login;
