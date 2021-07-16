import React from "react"
import styled from "styled-components"

import Logo from "./Logo"
import NavbarLinks from "./NavbarLinks"

const StyledNavigation = styled.nav`
  padding: 1rem;
  background-color: black;
  display: flex;
  justify-content: space-between;
`

const Navbar = () => {
  return (
    <StyledNavigation>
      <Logo />
      <NavbarLinks />
    </StyledNavigation>
  )
}

export default Navbar
