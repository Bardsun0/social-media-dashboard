import { motion } from "framer-motion";
import { posts, followers } from "../assets/mockData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Analytics() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Analytics</h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-white p-4 rounded-lg shadow-md"
          variants={itemVariants}
        >
          <h2 className="text-xl font-bold mb-2">Post Analytics</h2>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {posts.map((post) => (
              <motion.li
                key={post.id}
                className="mb-2 p-2 border rounded"
                variants={itemVariants}
              >
                <p className="font-semibold">Content: {post.content}</p>
                <p>Likes: {post.likes}</p>
                <p>Comments: {post.comments}</p>
                <p>Shares: {post.shares}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          className="bg-white p-4 rounded-lg shadow-md"
          variants={itemVariants}
        >
          <h2 className="text-xl font-bold mb-2">Follower Growth</h2>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {followers.map((follower) => (
              <motion.li
                key={follower.date}
                className="mb-2 p-2 border rounded"
                variants={itemVariants}
              >
                <p className="font-semibold">Date: {follower.date}</p>
                <p>Followers: {follower.count}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Analytics;
