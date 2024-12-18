// src/contexts/AuthContext.js
import { use } from "framer-motion/client";
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [userDetailsState, setUserDetailsState] = useState({name: "", email: ""});

  useEffect(() => {
    // Retrieve and parse the user data from localStorage only once on mount
    const storedUser = localStorage.getItem("userIsLoggedIn");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        console.log("Parsed user:", parsedUser); // Log the parsed user object
        setUser(parsedUser); // Update state with parsed user if valid
      } catch (error) {
        console.error("Failed to parse user data from localStorage:", error);
        setUser(null); // Set user to null if parsing fails
      }
    } else {
      console.warn("No user data found in localStorage");
      setUser(null); // Set user to null if localStorage is empty or missing
    }
  }, []); // Dependency array ensures this runs once on mount

  useEffect(() => {
    // Log user state and update isUserLoggedIn status whenever 'user' changes
    console.log("User state updated:", user);
    setIsUserLoggedIn(!!user); // Update login status based on user presence
  }, [user]); // Dependency array ensures this runs whenever 'user' changes

  useEffect(() => {
    const userDetailsLocal = localStorage.getItem("userDetails");
    if (userDetailsLocal) {
      try {
        const parsedUserDetails = JSON.parse(userDetailsLocal);
        console.log("Parsed user details:", parsedUserDetails);
        setUserDetailsState(parsedUserDetails);
      } catch (error) {
        console.error("Failed to parse user details from localStorage:", error);
        setUserDetailsState({ name: "", email: "" });
      }
    }
  }, [user]);

  const login = (userData) => {
    setUser(userData);
    setIsUserLoggedIn(true);
    localStorage.setItem("userIsLoggedIn", JSON.stringify(userData)); // Store user data
    console.log("User logged in:", userData); // Log for verification
  };

  const logout = () => {
    setUser(null);
    setIsUserLoggedIn(false);
    localStorage.removeItem("userIsLoggedIn"); // Clear user data from localStorage
    console.log("User logged out."); // Log for verification
  };

  const value = {
    isUserLoggedIn,
    setIsUserLoggedIn,
    user,
    login,
    logout,
    userDetailsState,
    setUserDetailsState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
