import React from "react";

import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div class="flex-center-screen">
      <div class="auth-container light-gradient-card">
        <h2 class="h2">SIGN UP</h2>

        <div>
          <input
            type="text"
            class="form-field"
            placeholder="Full name"
            id="name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            class="form-field"
            placeholder="Email"
            id="email"
            required
          />
        </div>

        <div class="input-password-container">
          <input
            type="password"
            class="form-field"
            placeholder="Password"
            id="password"
            required
          />
          <span class="btn-eye">
            <i class="fas fa-eye-slash"></i>
          </span>
        </div>

        <button
          class="btn btn-contained-primary btn-login"
          type="submit"
          id="btn-signup"
        >
          Sign Up
        </button>

        <p>
          Already have an account?
          <Link to="/login">
            <button class="btn-link" id="signup-pg-btn-login">
              Login here
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export { SignUp };
