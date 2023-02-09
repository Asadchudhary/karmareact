import React from "react";
import logo from "../src/Images/logo.png";
import insta from "../src/Images/insta.png";
import facebook from "../src/Images/facebook.png";
import twitter from "../src/Images/twitter.png";
import youtube from "../src/Images/youtube.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="f1">
        <img src={logo} alt="Logo" className="flogo" />

        <p>2307 Beverley Rd, New York</p>
        <a href="office@finance.com">office@finance.com</a>
        <a href="tel:+(0712)81979555">+ (0712) 819 79 555</a>
        <div className="icons">
          <img src={insta} alt="Insta" className="ficons" />
          <img src={facebook} alt="facebook" className="ficons" />
          <img src={twitter} alt="Twitter" className="ficons" />
          <img src={youtube} alt="youtube" className="ficons" />
        </div>
      </div>
      <div className="f2">
        <h1 className="fheading">Company</h1>
        <p className="fbtns">
          <a href="">Mission</a>
        </p>
        <p className="fbtns">
          <a href="">About Us</a>
        </p>
        <p className="fbtns">
          <a href="">Why choose us</a>
        </p>
        <p className="fbtns">
          <a href="">Team</a>
        </p>
      </div>
      <div className="f3">
        <h1 className="fheading">Services</h1>
        <p className="fbtns">
          <a href="">Pricing</a>
        </p>
        <p className="fbtns">
          <a href="">Awards Us</a>
        </p>
        <p className="fbtns">
          <a href="">Services</a>
        </p>
        <p className="fbtns">
          <a href="">Testimonials</a>
        </p>
      </div>
      <div className="f4">
        <h1 className="fheading">Resources</h1>
        <p className="fbtns">
          <a href="">Contacts</a>
        </p>
        <p className="fbtns">
          <a href="">Blog</a>
        </p>
        <p className="fbtns">
          <a href="">F.A.Q</a>
        </p>
        <p className="fbtns">
          <a href="">Get a Quote</a>
        </p>
      </div>
      <div className="f5">
        <h1 className="fheading">Subscribe</h1>
        <input
          type="email"
          id="mail"
          name="mail"
          placeholder="Your email"
          className="emailInput"
        />
        <input type="submit" value="Get Started" className="btn-fget" />
      </div>
    </div>
  );
};

export default Footer;
