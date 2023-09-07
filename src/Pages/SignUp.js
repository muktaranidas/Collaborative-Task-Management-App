// SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
    profilePicture: null,
  });

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePicture: file });
    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data here (e.g., check for empty fields)
    // Store user data in local storage
    localStorage.setItem("user", JSON.stringify(formData));
    // Optionally, you can also redirect the user to a login page
    navigate("/login");
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-4">
      <h2 className="text-2xl font-semibold mb-4">Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="profile" className="block text-gray-600">
            Profile:
          </label>
          <input
            id="profilePicture"
            name="profilePicture"
            type="file"
            accept=".jpg, .jpeg, .png"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            onChange={handleFileChange}
          />
          {/* Display the selected profile picture in real-time */}
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="w-32 h-32 mx-auto rounded-full"
              />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block text-gray-600">
            Bio:
          </label>
          <textarea
            type="text"
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
