import React, { Fragment } from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import logo from "../../../images/logo.png";
import MetaData from "../../layout/MetaData";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://github.com/jay-pro/new_bookstore_fieldproject";
  };
  return (
    <Fragment>
      <MetaData title="Gatito y Libros - About Us" />
      <div className="aboutSection">
        <div></div>
        <div className="aboutSectionGradient"></div>
        <div className="aboutSectionContainer">
          <Typography component="h1">About Us</Typography>
          <div>
            <div>
              <Avatar
                style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                src={logo}
                alt="Founder"
              />
              <Typography>Bùi Hà Nhi + Nguyễn Quang Vũ</Typography>
              <Button onClick={visitInstagram} color="primary">
                Visit our github source code
              </Button>
              <span>
                This is a bookstore wesbite made by BuiHaNhi and NguyenQuangVu.
                Only with the purpose to use MERN Stack on the field project of
                K18 UTE.
              </span>
            </div>
            <div className="aboutSectionContainer2">
              <Typography component="h2">Our Information</Typography>
              <a href="https://www.facebook.com/quangvungn" target="blank">
                <FacebookIcon className="facebookSvgIcon" />
              </a>

              <a href="https://www.facebook.com/bhanih" target="blank">
                <FacebookIcon className="facebookSvgIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;