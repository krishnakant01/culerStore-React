import React from "react";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <p>
        Made with <span role="img">♥️</span> by Krishnakant Singh
      </p>
      <ul className="footer-links">
        <li className="social-link-list-items">
          <a
            href="mailto: singhkrishnakant3@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </li>
        <li className="social-link-list-items ">
          <a
            href="https://github.com/krishnakant01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-link-list-items">
          <a
            href="https://twitter.com/krishnakant_01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-link-list-items">
          <a
            href="https://www.linkedin.com/in/krishnakant-singh-333450193/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
      <p className="footer-copyright">&copy; All Rights Reserved.</p>
    </div>
  );
};

export { Footer };
