import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import styled from "styled-components"

const StyledNavlist = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;

  li a {
    color: white;
    margin-left: 1rem;
    text-transform: uppercase;
  }
`

const NavbarLinks = ({ toggleMenu }) => {
  const { site } = useStaticQuery(query)

  const menuLinks = site.siteMetadata.menuLinks

  return (
    <StyledNavlist>
      {menuLinks.map(link => (
        <li key={link.name}>
          <Link
            to={link.link}
            className="nav-item"
            onClick={() => toggleMenu(prev => !prev)}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </StyledNavlist>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        menuLinks {
          link
          name
          submenu {
            link
            name
          }
        }
      }
    }
  }
`
export default NavbarLinks
