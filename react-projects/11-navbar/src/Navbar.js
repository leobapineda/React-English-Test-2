import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const linksHeight = `${links.length * 2.5}rem`;
        // mandar una variable a css y poner ese height
  console.log(show);
  console.log(linksHeight);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            onClick={() => setShow((prev) => !prev)}
            className="nav-toggle"
          >
            <FaBars />
          </button>
        </div>
        <div
          style={{ height: `${show ? linksHeight : 0}` }}
          className={`links-container`}
        >
          <ul className="links">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <a href={url}>
                    {text}
                    {id}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((red) => {
            const { id, icon, url } = red;
            return (
              <li key={id}>
                <a target="_blank" href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
