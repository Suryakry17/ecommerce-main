import React from "react";
import "./styles/Footer.css"; // ✅ Link to custom CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Created by{" "}
          <a
            href="https://github.com/suryakry17.git"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          >
            Jayasuriya
          </a>
        </p>
        <a
          className="footer-icon"
          href="https://github.com/suryakry17.git"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
