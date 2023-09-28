import React from "react";
import { signInWithProvider } from "./FirebaseService";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaGithub, FaPhoneAlt } from "react-icons/fa";

const Login = ({ setUser, user }) => {
  return (
    <div>
      <div
        className=" flex items-center justify-center h-96 "
        style={{ height: "495px" }}
      >
        {user ? (
          <h2 className="text-center text-white font-medium text-2xl mb-6">
            👍Login Success
          </h2>
        ) : (
          <div class="w-80 want p-6 rounded-lg shadow-lg">
            <h1 class="text-2xl font-semibold mb-4 text-white text-center">
              <b>Login</b>
            </h1>
            <div class="space-y-4">
              <div>
                <button
                  class="bg-red-600 hover:bg-red-700 text-white flex items-center space-x-2  font-bold py-2 px-4 rounded-full w-full"
                  onClick={() => signInWithProvider("Google", setUser)}
                >
                  <span className="mr-2 ">
                    <FaGoogle size={20} />
                  </span>
                  <span>Login with Google</span>
                </button>
              </div>

              <div>
                <button
                  class="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2 font-bold py-2 px-4 rounded-full w-full"
                  onClick={() => signInWithProvider("Facebook", setUser)}
                >
                  <span className=" mr-2 ">
                    <FaFacebook size={20} />
                  </span>
                  <span> Login with Facebook</span>
                </button>
              </div>
              <div>
                <Link to="/phoneVerify">
                  <button class="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2 font-bold py-2 px-4 rounded-full w-full">
                    <span className="mr-2">
                      <FaPhoneAlt size={20} />
                    </span>
                    <span>Login with Phone</span>
                  </button>
                </Link>
              </div>
              <div>
                <button
                  class="bg-gray-800 hover:bg-gray-900 text-white flex items-center space-x-2 font-bold py-2 px-4 rounded-full w-full"
                  onClick={() => signInWithProvider("Github", setUser)}
                >
                  <span className="mr-2">
                    <FaGithub size={20} />
                  </span>
                  <span>Login with GitHub</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
