import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          to="/profile"
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
        >
          <h2 className="text-xl font-bold">Profile</h2>
          <p>Manage your profile settings</p>
        </Link>
        <Link
          to="/schedule"
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
        >
          <h2 className="text-xl font-bold">Post Schedule</h2>
          <p>Schedule your posts</p>
        </Link>
        <Link
          to="/analytics"
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
        >
          <h2 className="text-xl font-bold">Analytics</h2>
          <p>View your post analytics</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
