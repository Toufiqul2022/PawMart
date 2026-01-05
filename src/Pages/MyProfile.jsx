import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [update, setUpdate] = useState(false);

  if (!user) {
    return <p className="text-center text-xl mt-10">Please login first.</p>;
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    updateProfile(auth.currentUser, { displayName: name, photoURL: photoUrl })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoUrl });
        setUpdate(false);
      })
      .catch(console.log);
  };

  return (
    <div className="relative min-h-screen px-5 md:px-10 py-10 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="avatar mt-5">
          <div className="w-36 rounded-full">
            <img src={user?.photoURL} alt="profile" />
          </div>
        </div>

        <p className="text-xl font-semibold text-white mt-4">
          {user?.displayName}
        </p>
        <p className="text-lg text-white/80">{user?.email}</p>

        <button onClick={() => setUpdate(!update)} className="btn mt-3">
          Update Profile
        </button>

        {update && (
          <form
            onSubmit={handleUpdate}
            className="card-body max-w-sm w-full mt-5 bg-white/90 rounded-xl shadow-lg"
          >
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered w-full"
            />

            <label className="label mt-2">PhotoURL</label>
            <input
              type="text"
              name="photoUrl"
              defaultValue={user?.photoURL}
              className="input input-bordered w-full"
            />

            <button className="btn btn-neutral mt-4 w-full" type="submit">
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
