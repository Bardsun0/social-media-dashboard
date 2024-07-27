function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full mt-2 p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full mt-2 p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Profile Picture</label>
            <input type="file" className="w-full mt-2 p-2 border rounded" />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
