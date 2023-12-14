/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title" id="size">
          <span id="r">R</span>AHEEM</h1>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/raheem0002"
            className="footer__social-link"
            id="facebook"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/raheem._.02/"
            className="footer__social-link"
            id="instagram"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/raheem02/"
            className="footer__social-link"
            id="linkedin"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          Built From Scratch With <span id="heart">💚</span> &#169;  Abdul Raheem. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
