import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  // ==========>>>>>>>>>
  function displaySubmenu(e) {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 6;
    // const bottom = tempBtn.bottom;
    openSubmenu(page, { center, bottom });
  }

  function hide(e) {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
      return;
    }
    return;
  }

  return (
    <nav onMouseOver={(e) => hide(e)} className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img className="nav-logo" src={logo} alt="logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button onMouseOver={(e) => displaySubmenu(e)} className="link-btn">
              products
            </button>
          </li>
          <li>
            <button onMouseOver={(e) => displaySubmenu(e)} className="link-btn">
              developers
            </button>
          </li>
          <li>
            <button onMouseOver={(e) => displaySubmenu(e)} className="link-btn">
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
