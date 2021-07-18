import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import styled from "styled-components"

const StyledNavlist = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  li {
    position: relative;
    width: 100%;
    transition-duration: 0.5s;
    border-bottom: 0.4px solid transparent;

    &:hover {
      cursor: pointer;
      & > .nav-item:not(.active-link) {
        color: ${({ theme }) => theme.colors.lightGrey};
      }
      @media (max-width: 768px) {
        padding: 1rem;
        border-bottom: 0.4px solid ${({ theme }) => theme.colors.grey};
      }
    }
    .nav-item {
      color: ${({ theme }) => theme.colors.grey};
      letter-spacing: 0.3px;
      white-space: nowrap;
      transition: all 200ms ease-in;

      @media (max-width: 768px) {
        text-align: center;
        text-transform: capitalize;
        padding: 1rem 0;
        font-size: 1.5rem;
        margin-left: 1rem;
        z-index: 20;
      }
    }

    .active-link {
      color: slateblue;
    }

    /* submenu style */
    & > ul {
      visibility: hidden;
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
      opacity: 0;
      display: none;
      position: absolute;
      transition: all 0.5s ease;
      margin-top: 3.5rem;
      top: 0;
      left: 0;
      z-index: 100;

      & li {
        transition: 0.5s ease;
        padding: 1rem;

        .nav-item {
          display: block;
          width: 100%;
        }

        .active-link {
          color: slateblue;
        }
      }
    }

    @media (min-width: 768px) {
      border-bottom: none;
      padding: 1rem;

      /* &:focus-within > ul, */
      &:hover > ul {
        visibility: visible;
        opacity: 1;
        display: block;
      }
    }
  }
`

const NavbarLinks = ({ toggleMenu }) => {
  const { site } = useStaticQuery(query)

  const menuLinks = site.siteMetadata.menuLinks

  const dropdownMenu = menuLinks.filter(
    ({ submenu }) => submenu && submenu.length > 0
  )

  const { submenu } = dropdownMenu[0]

  return (
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
