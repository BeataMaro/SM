import React, { useState } from "react"
// import styled, { createGlobalStyle } from "styled-components"

import Logo from "../Logo"
import Hamburger from "../Hamburger"
import NavbarLinks from "./NavbarLinks"
import { ModalStyles, StyledNavigation, Toggle, Navbox } from "./NavbarStyle"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <StyledNavigation>
      <Logo />
      <Toggle onClick={() => setNavbarOpen(prev => !prev)}>
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks toggleMenu={setNavbarOpen} />
        </Navbox>
      ) : (
        <Navbox open>
          <ModalStyles />
          <NavbarLinks toggleMenu={setNavbarOpen} />
        </Navbox>
      )}
    </StyledNavigation>
  )
}

export default Navbar
