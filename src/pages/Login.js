import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="flex-center-screen">
      <div class="auth-container light-gradient-card">
        <h2 class="h2">LOGIN</h2>

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
          id="btn-login"
        >
          Login
        </button>

        <p>
          Don't have an account?
          <Link to="/signup">
            <button class="btn-link" id="login-pg-btn-signup">
              Create an account
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export { Login };
