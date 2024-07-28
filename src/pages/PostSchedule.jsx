import { motion } from "framer-motion";

function PostSchedule() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Post Schedule</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Post Content</label>
            <motion.textarea
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            ></motion.textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Media</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="file"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Schedule Date</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="date"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition duration-300"
          >
            Schedule Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostSchedule;
