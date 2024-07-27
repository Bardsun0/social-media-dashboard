import { posts, followers } from "../assets/mockData";

function Analytics() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Post Analytics</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id} className="mb-2">
                <p>Content: {post.content}</p>
                <p>Likes: {post.likes}</p>
                <p>Comments: {post.comments}</p>
                <p>Shares: {post.shares}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Follower Growth</h2>
          <ul>
            {followers.map((follower) => (
              <li key={follower.date} className="mb-2">
                <p>Date: {follower.date}</p>
                <p>Followers: {follower.count}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
