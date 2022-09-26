import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Navbar = () => {
  const { showSidebar, showSubmenu, hideSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    console.log(page);
    const tempBtn = e.target.getBoundingClientRect();
    console.log(tempBtn);
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    showSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      hideSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <button onClick={showSidebar} className="btn toggle-btn">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn ">
              products
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">
              developers
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
