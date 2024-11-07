// src/pages/ProfilePage.jsx
import React from "react";
import { useAuth } from "../../context/authContext"; // Import the Auth Context
import { useNavigate } from "react-router-dom"; // Use for navigation

const ProfilePage = () => {
  const { user, setIsUserLoggedIn } = useAuth(); // Access user details and login status from context
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic
    localStorage.removeItem("userIsLoggedIn"); // Clear from localStorage
    setIsUserLoggedIn(false); // Update login state
    navigate("/login"); // Redirect to login page
  };

  const handleEditPassword = () => {
    // Navigate to edit password page or open modal
    navigate("/edit-password"); // or open a modal for editing password
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-6">
      <div className="card w-full max-w-md bg-glassLight shadow-xl border border-glassBorder rounded-lg p-6 space-y-6">
        {/* Profile Avatar */}
        <div className="avatar mx-auto mb-4">
          <div className="w-24 rounded-full ring ring-accent ring-offset-background">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="Profile"
            />
          </div>
        </div>

        {/* User Information */}
        <h2 className="text-2xl font-bold text-primary text-center">
          {user?.name || "Guest User"}
        </h2>
        <p className="text-secondary text-center">
          {user?.email || "guest@example.com"}
        </p>

        {/* Action Buttons */}
        <button
          className="btn btn-accent w-full mt-4"
          onClick={handleEditPassword}>
          Edit Password
        </button>
        <button className="btn btn-error w-full" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
