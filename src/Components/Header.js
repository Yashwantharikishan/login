import React from "react";
import { BiLogInCircle, BiSolidLogOutCircle } from "react-icons/bi";
// import { auth } from "./FirebaseService";
import firebase from "firebase/compat/app";

const Header = ({ user, setUser }) => {
  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <div className="">
      <div className="navbar">
        {user ? (
          <button
            onClick={handleSignOut}
            class="bg-gray-800 hover:bg-gray-900 text-white flex items-center space-x-2 font-bold py-2 px-4 rounded-full "
          >
            <span className="mr-2">
              <BiSolidLogOutCircle size={30} />
            </span>
            <span>Logout</span>
          </button>
        ) : (
          <button class="bg-gray-800 hover:bg-gray-900 text-white flex items-center space-x-2 font-bold py-2 px-4 rounded-full ">
            <span className="mr-2">
              <BiLogInCircle size={30} />
            </span>
            <span>Login Page</span>
          </button>
        )}
        <div className="heading">
          <b>{user?.displayName}</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
