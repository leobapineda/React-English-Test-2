import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGetContext } from "./context";
const Sidebar = () => {
  const { sidebarState, CloseSidebar } = useGetContext();

  return (
    <aside className={`sidebar ${sidebarState ? "show-sidebar" : null}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button onClick={CloseSidebar} className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              {" "}
              <a href={url}>
                {" "}
                {icon} {text}
              </a>{" "}
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              {" "}
              <a href={url}> {icon} </a>{" "}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
