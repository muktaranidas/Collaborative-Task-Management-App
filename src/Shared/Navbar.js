import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  //   const handleLogin = () => {
  //     if (user.email) {
  //       setIsLoggedIn(true);
  //     }
  //   };

  const handleLogout = () => {
    if (user?.email) {
      localStorage.removeItem("user");
      window.location.reload();
    }
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          Collaborative Task Management App
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          {user?.email ? (
            <>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-gray-300"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup" className="text-white hover:text-gray-300">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  //   onClick={handleLogin}
                  className="text-white hover:text-gray-300"
                >
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
