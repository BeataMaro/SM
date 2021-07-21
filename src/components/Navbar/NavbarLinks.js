import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"

import { StyledNavlist, StyledIcon } from "./NavbarLinksStyle"

const NavbarLinks = ({ toggleMenu }) => {
  const { site } = useStaticQuery(query)

  const menuLinks = site.siteMetadata.menuLinks

  const dropdownMenu = menuLinks.filter(
    ({ submenu }) => submenu && submenu.length > 0
  )

  const { submenu } = dropdownMenu[0]

  return (
    <>
      <StyledNavlist>
        {menuLinks.map(link => (
          <li key={link.name}>
            <Link
              to={link.link}
              className="nav-item"
              activeClassName="active-link"
              products={`${link.name === "Produkty"}`}
              onClick={() => toggleMenu(prev => !prev)}
            >
              {link.name}
            </Link>
            {/* Submenu */}
            {link.submenu && link.submenu.length > 0 ? (
              <ul aria-label="submenu">
                {submenu.map(sublink => (
                  <li key={sublink.name}>
                    <Link
                      to={`/products${sublink.link}`}
                      className="nav-item"
                      activeClassName="active-link"
                    >
                      {sublink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </StyledNavlist>
      <StyledIcon>
        <a
          href="https://www.facebook.com/SelfmaxPolska"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </StyledIcon>
    </>
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
