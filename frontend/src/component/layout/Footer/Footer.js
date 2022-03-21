import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download Application on Mobile</h4>
        <p>Download App for Android or IOS mobile phone.</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="appstore" />
      </div>

      <div className="midFooter">
        <h1>Gatito y Libros</h1>
        <p>High Quality is our first priority.</p>
        <p>Copyrights 2021 &copy; Bùi Hà Nhi + Nguyễn Quang Vũ</p>
      </div>

      <div className="rightFooter">
        <h4>Our bios</h4>
        <a href="https://www.facebook.com/bhanih">Hà Nhi 's Facebook Profile</a>
        <a href="https://www.facebook.com/quangvungn">
          Quang Vũ 's Facebook Profile
        </a>
      </div>
    </footer>
  );
};

export default Footer;