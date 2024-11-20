// src/pages/ProfilePage.jsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext"; // Import the Auth Context
import Navbar from "../../components/navbar";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig"; // Import Firebase auth instance
import AuthModal from "../../components/authmodal";
import toast, { Toaster } from "react-hot-toast";
import { use } from "framer-motion/client";

const ProfilePage = () => {
  const { setIsUserLoggedIn, isUserLoggedIn, userDetailsState } = useAuth(); // Access user details and login status from context

  const [handleAuthModal, setHandleAuthModal] = useState(true);
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out using Firebase auth
      localStorage.removeItem("userIsLoggedIn"); // Clear login data from localStorage
      localStorage.removeItem("userDetails"); // Clear user details from localStorage
      setIsUserLoggedIn(false);
      setHandleAuthModal(true);
    } catch (error) {
      toast.error("Error logging out:", error.message);
      console.error("Error logging out:", error.message);
    }
  };

  const handleEditPassword = () => {
    // Navigate to edit password page or open modal
    // or open a modal for editing password
  };
  const handlecloseAuthModal = () => {
    console.log("User logged in:", isUserLoggedIn);
    
    if(!isUserLoggedIn) {
      setHandleAuthModal(true);
      toast.error("For better experience, please login to continue.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-dark p-6">
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} /> {/* Add Toaster */}
      {isUserLoggedIn ? (
        <div className="card w-full max-w-md bg-glassLight shadow-xl border border-glassBorder rounded-lg p-6 space-y-6">
          {/* Profile Avatar */}
          <div className="avatar mx-auto mb-4">
            <div className="w-24 rounded-full ring ring-accent ring-offset-background">
              <img
                src={
                  userDetailsState?.photoURL ||
                  "https://via.placeholder.com/150"
                }
                alt="Profile"
              />
            </div>
          </div>

          {/* User Information */}
          <h2 className="text-2xl font-bold text-accent text-center">
            {userDetailsState?.name || "Guest User"}
          </h2>
          <p className="text-accent text-center">
            {userDetailsState?.email || "guest@example.com"}
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
        <AuthModal isOpen={handleAuthModal} onClose={handlecloseAuthModal}/>
      )}
    </div>
  );
};

export default ProfilePage;
