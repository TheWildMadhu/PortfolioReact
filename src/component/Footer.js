import React from 'react'
import "../css/Footer.css"
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillGithub} from "react-icons/ai";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="foter">
    <div className="footer-content">
      <h3>welcome To my portfolio</h3>
      <p>
        Hello, I'm Madhu Sen.
        You have come this far, it means you like my website.
        Thank you
      </p>
 
    </div>
    <div className="footer-bottom">
      <p>
        copyright &copy;2021 <a href="#">Madhu Sen</a>{" "}
      </p>
    </div>
    <div className="footer-menu">
      <ul className="f-menu">
        <li>
        <Link to="/">
          <a href="">Home</a>
          </Link>
        </li>
        <li>
        <Link to = "/about">
          <a href="">About</a>
          </Link>
        </li>
        <li>
        <Link to ="/contact">
          <a href="">Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Footer
