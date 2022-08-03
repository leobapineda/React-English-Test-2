import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  function handleClick() {}

  useEffect(() => {
    console.log("useEffect");
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `${0}px`;
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            onClick={() => setShowLinks((prev) => !prev)}
            className="nav-toggle"
          >
            <FaBars />
          </button>
        </div>
        <div ref={linksContainerRef} className={`links-container`}>
          <ul ref={linksRef} className="links">
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
