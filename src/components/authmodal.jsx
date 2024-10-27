import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AuthModal = ({ isOpen, onClose }) => {
  const [loginState, setLoginState] = useState(true);

  useEffect(() => {
    Aos.init();
  }, [loginState]);

  if (!isOpen) return null; // Render nothing if the modal is not open

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
            <div className="p-8" data-aos="fade-left">
              <h3 className="font-bold text-lg">Login</h3>
              <p className="py-4">Please enter your login details.</p>

              <form className="space-y-4">
                {/* Username/Email Input */}
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

                {/* Password Input */}
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

                {/* Remember Me & Forgot Password */}
                <div className="flex justify-between items-center">
                  <label className="flex items-center space-x-2 text-accent">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-accent hover:underline">
                    Forgot Password?
                  </a>
                </div>

                {/* Submit Button */}
                <div className="form-control">
                  <button className="btn border-accent hover:bg-accent w-1/2 rounded-full mx-auto text-white">
                    Login
                  </button>
                </div>
              </form>
              {/* Sign Up Prompt */}
              <div className="text-center mt-4">
                <p className="text-accentText">
                  Don't have an account?{" "}
                  <a
                    onClick={() => {
                      setLoginState(false);
                    }}
                    className="text-accent hover:underline">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          ) : (
            <div className="p-8" data-aos="fade-right">
              <h3 className="font-bold text-lg">Sign Up</h3>
              <p className="py-4">Please enter your sign-up details.</p>

              <form className="space-y-4">
                {/* Username Input */}
                <div className="form-control">
                  <label
                    htmlFor="username"
                    className="label text-sm font-semibold text-accentText">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="input input-bordered w-full bg-white text-gray-900 focus:outline-none"
                    placeholder="Enter your username"
                    required
                  />
                </div>

                {/* Email Input */}
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

                {/* Password Input */}
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

                {/* Confirm Password Input */}
                <div className="form-control">
                  <label
                    htmlFor="confirm-password"
                    className="label text-sm font-semibold text-accentText">
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    className="input input-bordered w-full bg-white text-gray-900 focus:outline-none"
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="form-control">
                  <button className="btn border-accent hover:bg-accent w-1/2 rounded-full mx-auto text-white">
                    Sign Up
                  </button>
                </div>
              </form>

              {/* Login Prompt */}
              <div className="text-center mt-4">
                <p className="text-accentText">
                  Already have an account?{" "}
                  <a
                    onClick={() => {
                      setLoginState(true);
                    }}
                    className="text-accent hover:underline">
                    Login
                  </a>
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
