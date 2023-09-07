// LogoutButton.js
import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    // Clear user authentication state, e.g., remove user data from local storage
    localStorage.removeItem("user");

    // You may want to redirect the user to the login page after logging out
    // For example, using React Router:
    // history.push('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-red-300"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
