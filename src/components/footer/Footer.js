import React from "react";
import {
  FaApple,
  FaGooglePlay,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-title">Biz haqimizda</h4>

            <ul className="footer-container-list">
              <li className="footer-container-item">
                <a className="footer-container-link" href="">
                  Topshirish punktlari
                </a>
              </li>

              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                  Vakansiyalar
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-title">Foydalanuvchilarga</h4>

            <ul className="footer-container-list">
              <li className="footer-container-item">
                <a className="footer-container-link" href="">
                  Biz bilan bog'lanish
                </a>
              </li>

              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                  Savol-Javob
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-title">Tadbirkorlarga</h4>

            <ul className="footer-container-list">
              <li className="footer-container-item">
                <a className="footer-container-link" href="">
                  Uzumdan soting
                </a>
              </li>

              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                  Sotuvchi kabinetiga kirish
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-social-title">
              Ilovani yuklab olish
            </h4>

            <ul className="footer-container-social-list">
              <li className="footer-container-social-item">
                <a className="footer-container-social-link" href="">
                  <FaApple />
                </a>
                <span>AppStore</span>
              </li>

              <li className="footer-container-social-item">
                <a className="footer-container-social-link" href="">
                  <FaGooglePlay />
                </a>
                <span>Google play</span>
              </li>
            </ul>

            <div className="footer-container-internal-wrapper-bottom">
              <h4 className="footer-container-bottom-contact-title">
                Uzum ijtimoiy tarmoqlarda
              </h4>

              <ul className="footer-container-bottom-contact-list">
                <li className="footer-container-bottom-contact-item">
                  <a className="footer-container-bottom-contact-link" href="">
                    <FaInstagram />
                  </a>
                </li>

                <li className="footer-container-bottom-contact-item">
                  <a className="footer-container-bottom-contact-link" href="">
                    <FaTelegram />
                  </a>
                </li>

                <li className="footer-container-bottom-contact-item">
                  <a className="footer-container-bottom-contact-link" href="">
                    <FaYoutube />
                  </a>
                </li>

                <li className="footer-container-bottom-contact-item">
                  <a className="footer-container-bottom-contact-link" href="">
                    <FaFacebookF />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
