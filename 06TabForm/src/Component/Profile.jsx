
const Profile = () => {
  return (
    <div className="flex flex-col justify-center p-5">
      <h2 className="flex text-3xl justify-center">Profile</h2>
      <div className="flex flex-col justify-center p-5">
        <label className="shadow-xl p-3 shadow-gray-100">Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="border-gray-400 rounded-lg shadow-xl shadow-gray-400 px-3 py-2 w-[400px]"
        />

        <label className="shadow-xl p-3 shadow-gray-100">Email</label>
        <input
          type="text"
          placeholder="Enter Your Email"
          className="border-gray-400 rounded-lg shadow-xl shadow-gray-400 px-3 py-2 w-[400px] text-black"
        />

        <label className="shadow-xl p-3 shadow-gray-100">Age</label>
        <input
          type="number"
          placeholder="Enter Your Age"
          className="border-gray-400 rounded-lg shadow-xl shadow-gray-400 px-3 py-2 w-[400px]"
        />

        <button className="w-full border-2 my-10 text-xl text-white bg-blue-500 rounded-2xl py-2 hover:bg-blue-400">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Profile;
