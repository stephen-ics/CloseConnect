import React from 'react';
import {
  Nav, 
  NavLink, 
  Bars, 
  NavMenu, 
  NavBtn, 
  NavBtnLink
} from "./NavbarElements";

import logo from "./logo.png"



const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} style={{width:"70px"}}></img>
        </NavLink>
        <NavMenu>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/contact-us">
            Contact Us
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/join-chat">Join Chat!</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  )
}


export default Navbar
