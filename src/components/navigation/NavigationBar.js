import React from "react";
import { NavLink, Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <header>
      <nav className="nav-container">
        <div
          className="mobile-nav-toggle"
          aria-controls="nav-link-list"
          aria-expanded="false"
        >
          <span className="sr-only">Menu</span>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <div className="nav-logo">
          <Link to="/">
            <div className="nav-title">
              <span className="bold-font blue-text">Culer</span>
              <span className="bold-font red-text">Store</span>
            </div>
          </Link>
        </div>

        <div className="nav-links">
          <ul className="nav-link-list" id="nav-link-list" data-visible="false">
            <NavLink to="/">
              <li className="nav-link-list-item">Home</li>
            </NavLink>

            <NavLink to="/boots">
              <li className="nav-link-list-item">Boots</li>
            </NavLink>

            <NavLink to="/footballkits">
              <li className="nav-link-list-item">Football Kits</li>
            </NavLink>
          </ul>
        </div>

        <div className="search-bar">
          <button className="btn btn-search" type="submit">
            <i className="far fa-search"></i>
          </button>
          <input
            type="text"
            placeholder="Search"
            id="search-input"
            className="search-input padding-075-1"
          />
        </div>

        <div className="nav-social-links">
          <ul>
            <li className="social-link-list-items">
              <Link to="/login">
                <button
                  className="btn btn-text-primary padding-05-1"
                  id="nav-btn-login"
                >
                  Sign In
                </button>
              </Link>
            </li>
            <li className="social-link-list-items">
              <Link to="/wishlist">
                <span>
                  <span className="badge-container">
                    <span className="nav-btns" id="nav-wishlist">
                      <i className="material-icons">favorite_border</i>
                    </span>
                    <span className="status-badge status-text">5</span>
                  </span>
                </span>
              </Link>
            </li>

            <li className="social-link-list-items">
              <Link to="/cart">
                <span className="badge-container">
                  <span className="nav-btns">
                    <i className="material-icons">shopping_cart</i>
                  </span>
                  <span className="status-badge status-text">3</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
