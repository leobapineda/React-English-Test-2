import userEvent from "@testing-library/user-event";
import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
  const {
    isSubmenuOpen,
    submenuLinks: { page, links },
    position,
  } = useGlobalContext();
  const menuRef = useRef(null)
  useEffect(() => {
    const {center, bottom} = position
      const menu = menuRef.current;
      menu.style.left = `${center}px`;
      menu.style.top = `${bottom}px`;
  }, [position]);

    console.log(page, links);
  return (
    <aside ref={menuRef} className={isSubmenuOpen ? "submenu show" : "submenu"}>
        <h5>{page}</h5>
        <div className={`submenu-center col-2`} >
          {links.map((link, index) => {
            const { label, icon, url } = link;
            return (
              <a key={index} href={url}>
                {icon} {label}
              </a>
            );
          })}
        </div>
    </aside>
  );
};

export default Submenu;
