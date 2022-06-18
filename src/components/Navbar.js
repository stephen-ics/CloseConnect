import React from 'react';
import {
  Nav, 
  NavLink, 
  Bars, 
  NavMenu, 
  NavBtn, 
  NavBtnLink
} from "./NavbarElements";

const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
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
