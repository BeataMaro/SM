import React from "react"
import styled from "styled-components"

import NavbarLinks from "./NavbarLinks"

const StyledNavigation = styled.nav`
  padding: 1rem;
  background-color: black;
`

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavbarLinks />
    </StyledNavigation>
  )
}

export default Navigation
