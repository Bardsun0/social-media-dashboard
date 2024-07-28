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

function Profile() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Profile</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="email"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Profile Picture</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="file"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Update Profile
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Profile;
