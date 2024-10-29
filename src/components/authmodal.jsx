import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../context/authContext"; // Importing AuthContext

const db = getFirestore();

const AuthModal = ({ isOpen, onClose }) => {
  const [loginState, setLoginState] = useState(true);
  const { setIsUserLoggedIn } = useAuth();

  useEffect(() => {
    Aos.init();
  }, []);

  const handleFormChange = (mode) => {
    setLoginState(mode === "login");
  };

  const signUp = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save additional data (Name) to Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: name,
        email: email,
      });

      await sendEmailVerification(userCredential.user);
      setIsUserLoggedIn(userCredential.user); // Update context with new user
      console.log("Verification email sent.");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Optionally, save user info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
      });

      setIsUserLoggedIn(user); // Update context with new user
      console.log("User signed up with Google:", user);
      onClose();
    } catch (error) {
      console.error("Error with Google signup:", error.message);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password.length < 6 || confirmPassword.length < 6) {
      console.error("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      console.error("Passwords do not match.");
      return;
    }

    await signUp(name, email, password);
    onClose();
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setIsUserLoggedIn(userCredential.user); // Update context with logged-in user
      console.log("User logged in:", userCredential.user);
      onClose();
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <dialog id="my_modal_3" className="modal modal-open">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}>
              ✕
            </button>
          </form>

          {loginState ? (
            // Login Form
            <div key="login" className="p-8" data-aos="fade-left">
              <h3 className="font-bold text-lg">Login</h3>
              <p className="py-4">Please enter your login details.</p>
              <form className="space-y-4" onSubmit={handleLogin}>
                <div className="form-control">
                  <label
                    htmlFor="email"
                    className="label text-sm font-semibold text-accentText">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="input input-bordered w-full bg-white text-gray-900 focus:outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor="password"
                    className="label text-sm font-semibold text-accentText">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="input input-bordered w-full bg-white text-gray-900 focus:outline-none"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex justify-between items-center">
                  <label className="flex items-center space-x-2 text-accent">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-accent hover:underline">
                    Forgot Password?
                  </a>
                </div>
                <div className="form-control">
                  <button
                    type="submit"
                    className="btn border-accent hover:bg-accent w-1/2 rounded-full mx-auto text-white">
                    Login
                  </button>
                </div>
              </form>
              <div className="text-center mt-4">
                <p className="text-accentText">
                  Don't have an account?{" "}
                  <button
                    onClick={() => handleFormChange("signup")}
                    className="text-accent hover:underline">
                    Sign up
                  </button>
                </p>
              </div>
            </div>
          ) : (
            // Sign-Up Form
            <div key="signup" className="p-8" data-aos="fade-right">
              <h3 className="font-bold text-lg">Sign Up</h3>
              <p className="py-4">
                Please enter your sign-up details or sign up with Google.
              </p>
              <form className="space-y-4" onSubmit={handleSignUp}>
                <div className="form-control">
                  <label
                    htmlFor="name"
                    className="label text-sm font-semibold text-accentText">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="input input-bordered w-full bg-white text-gray-900 focus:outline-none"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor="email"
                    className="label text-sm font-semibold text-accentText">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="input input-bordered w-full bg-white text-gray-900 focus:outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor="password"
                    className="label text-sm font-semibold text-accentText">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="input input-bordered w-full bg-white text-gray-900 focus:outline-none"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor="confirm-password"
                    className="label text-sm font-semibold text-accentText">
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    name="confirmPassword"
                    className="input input-bordered w-full bg-white text-gray-900 focus:outline-none"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="submit"
                    className="btn border-accent hover:bg-accent w-1/2 rounded-full mx-auto text-white"
                    value="Sign Up"
                  />
                </div>
              </form>
              <div className="form-control mt-4">
                <button
                  onClick={handleGoogleSignUp}
                  className="btn border-accent hover:bg-accent w-1/2 rounded-full mx-auto text-white">
                  Sign Up with Google
                </button>
              </div>
              <div className="text-center mt-4">
                <p className="text-accentText">
                  Already have an account?{" "}
                  <button
                    onClick={() => handleFormChange("login")}
                    className="text-accent hover:underline">
                    Login
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default AuthModal;
