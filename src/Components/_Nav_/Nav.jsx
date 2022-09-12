import React, { useState, useEffect } from "react";
import Styles from "./Styles/Nav.module.css";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Nav = () => {
  const [sideMenu, setSideMenu] = useState(false);

  const toggleMenu = () => {
    setSideMenu((prev) => !prev);
  };

  return (
    <nav className={Styles.Nav}>
      <div
        className={`${Styles.Mobile_Menu} ${sideMenu ? Styles.MenuToggle : ""}`}
      >
        <CloseIcon onClick={toggleMenu} sx={{ fontSize: 30 }} className={Styles.CloseIcon} />
      </div>

      <div className={Styles.Left_Side}>
        <MenuIcon onClick={toggleMenu} sx={{ fontSize: 30 }} />

        <ul className={Styles.Navlink_Container}>
          <li className={Styles.NavItem}>
            <a href="#" className={Styles.Navlink}>
              Home
            </a>
          </li>
          <li className={Styles.NavItem}>
            <a href="#" className={Styles.Navlink}>
              Featured
            </a>
          </li>
          <li className={Styles.NavItem}>
            <a href="#" className={Styles.Navlink}>
              Contractors
            </a>
          </li>
          <li className={Styles.NavItem}>
            <a href="#" className={Styles.Navlink}>
              Businessess
            </a>
          </li>
          <li className={Styles.NavItem}>
            <a href="#" className={Styles.Navlink}>
              Jobs
            </a>
          </li>
        </ul>
      </div>

      <div className={Styles.Right_Side}>
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </div>
    </nav>
  );
};

export default Nav;
