function PostSchedule() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Post Schedule</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Post Content</label>
            <textarea className="w-full mt-2 p-2 border rounded"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Media</label>
            <input type="file" className="w-full mt-2 p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Schedule Date</label>
            <input type="date" className="w-full mt-2 p-2 border rounded" />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Schedule Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostSchedule;
