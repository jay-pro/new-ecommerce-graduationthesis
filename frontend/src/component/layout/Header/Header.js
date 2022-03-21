import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.gif";
/* import logo from "../../../images/logo.png"; */
import "./Header.css";

const options = {
  burgerColor: "#da7e37",
  burgerColorHover: "#ffdcc2",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#ffdd33",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "about",
  link1Size: "1.8vmax",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  link1Color: "#582f0e",
  link2Color: "#582f0e",
  link3Color: "#582f0e",
  link4Color: "#582f0e",
  link1ColorHover: "#ffba08",
  link2ColorHover: "#ffba08",
  link3ColorHover: "#ffba08",
  link4ColorHover: "#ffba08",
  link1Margin: "1vmax",
  link2Margin: "1vmax",
  link3Margin: "0",
  link4Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "#000000",
  searchIconColor: "#000000",
  cartIconColor: "#000000",
  profileIconColorHover: "#ffc300",
  searchIconColorHover: "#ffc300",
  cartIconColorHover: "#ffc300",
  cartIconMargin: "1vmax",
};
const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;