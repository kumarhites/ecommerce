import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Profile = () => {
  const { currentUser, logoutHandler } = useContext(AuthContext);
  const { firstName, lastName, email } = currentUser;
  return (
    <div className="h-screen bg-gray-200 pt-20">
      {/* <!-- Card start --> */}
      <div>
        <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="border-b px-4 pb-6">
            <div className="text-center my-4">
              <img
                className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4"
                src="https://ouch-cdn2.icons8.com/8tAHVkw1tsruTFpfpLEpyWhrubHDd_rnrzVg_8F8WT8/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjc2/LzE1MmE4OGYxLTYx/OGQtNGZlMC1hMjdj/LTdkN2E2ZWE3OGU1/NC5wbmc.png"
                alt=""
              />
              <div className="py-2">
                <h3 className="font-bold text-2xl mb-1">
                  {firstName} {lastName}
                </h3>
                <div className="inline-flex text-gray-700 items-center">
                  <MdOutlineAlternateEmail />
                  {email}
                </div>
              </div>
            </div>
            <div className="flex gap-2 px-2">
              <button
                className="flex-1 rounded-full bg-blue-600 text-white antialiased font-bold hover:bg-blue-800 px-4 py-2"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Card end --> */}
    </div>
  );
};

export default Profile;
