import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="text"
              className="w-full mt-2 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="email"
              className="w-full mt-2 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="password"
              className="w-full mt-2 p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
