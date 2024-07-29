import { motion } from "framer-motion";
import { posts, followers } from "../assets/mockData";
import { containerVariants, itemVariants } from "../utils/animations";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import api from "../utils/api";

function Analytics() {
  const { user } = useSelector((state) => state.auth);
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await api.get("/analytics");
        setAnalyticsData(response.data);
      } catch (error) {
        // Hata durumunda yapılacak işlemler
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      className="min-h-screen p-4 pt-28"
    >
      <h1 className="text-4xl font-heading font-bold mb-4 text-text-light">
        Analytics
      </h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-white p-4 rounded-lg shadow-card"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-heading font-bold mb-2 text-primary">
            Post Analytics
          </h2>
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
                <p className="font-semibold text-text-dark font-body">
                  Content: {post.content}
                </p>
                <p className="text-text-dark font-body">Likes: {post.likes}</p>
                <p className="text-text-dark font-body">
                  Comments: {post.comments}
                </p>
                <p className="text-text-dark font-body">
                  Shares: {post.shares}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          className="bg-white p-4 rounded-lg shadow-card"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-heading font-bold mb-2 text-primary">
            Follower Growth
          </h2>
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
                <p className="font-semibold text-text-dark font-body">
                  Date: {follower.date}
                </p>
                <p className="text-text-dark font-body">
                  Followers: {follower.count}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Analytics;
