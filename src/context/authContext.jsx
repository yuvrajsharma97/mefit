// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userIsLoggedIn")) {
      setIsUserLoggedIn(true);
    }else{
      setIsUserLoggedIn(false);
    }
  }, []);

  const value = {
    isUserLoggedIn,
    setIsUserLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
