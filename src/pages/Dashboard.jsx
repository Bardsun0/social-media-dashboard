import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen font-sans text-black p-4 pt-28">
      <h1 className="text-4xl font-heading font-bold mb-8">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          to="/profile"
          title="Profile"
          description="Manage your profile settings"
        />
        <DashboardCard
          to="/schedule"
          title="Post Schedule"
          description="Schedule your posts"
        />
        <DashboardCard
          to="/analytics"
          title="Analytics"
          description="View your post analytics"
        />
      </div>
    </div>
  );
}

function DashboardCard({ to, title, description }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={to}
        className="block bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition duration-300"
      >
        <h2 className="text-2xl font-heading font-bold mb-2">
          {title}
        </h2>
        <p className="text-text">{description}</p>
      </Link>
    </motion.div>
  );
}

export default Dashboard;
