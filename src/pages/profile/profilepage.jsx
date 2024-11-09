// src/pages/ProfilePage.jsx
import React, { useState } from "react";
import { useAuth } from "../../context/authContext"; // Import the Auth Context
import Navbar from "../../components/navbar";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig"; // Import Firebase auth instance
import AuthModal from "../../components/authmodal";

const ProfilePage = () => {
  const { user, setIsUserLoggedIn, isUserLoggedIn } = useAuth(); // Access user details and login status from context

  const [handleAuthModal, setHandleAuthModal] = useState(true);
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out using Firebase auth
      localStorage.removeItem("userIsLoggedIn"); // Clear login data from localStorage
      setIsUserLoggedIn(false);
      setHandleAuthModal(true);
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  const handleEditPassword = () => {
    // Navigate to edit password page or open modal
    // or open a modal for editing password
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-dark p-6">
      <Navbar />
      {isUserLoggedIn ? (
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
          <h2 className="text-2xl font-bold text-accent text-center">
            {user?.name || "Guest User"}
          </h2>
          <p className="text-accent text-center">
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
      ) : (
        <AuthModal isOpen={handleAuthModal} onClose={() => {alert("Please Login for better experience")}} />
      )}
    </div>
  );
};

export default ProfilePage;
