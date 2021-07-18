import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import styled from "styled-components"

const StyledNavlist = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;

  .nav-item {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.grey};
    letter-spacing: 0.3px;
    white-space: nowrap;
    transition: all 200ms ease-in;

    @media (max-width: 768px) {
      text-align: center;
      text-transform: capitalize;
      padding: 1rem 0;
      font-size: 1.5rem;
      z-index: 20;
    }
  }

  li a {
    color: white;
    margin-left: 1rem;
    text-transform: uppercase;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
    position: relative;
    transition-duration: 0.5s;
    border-bottom: 0.4px solid transparent;

    &:hover {
      cursor: pointer;

      & > a {
        color: ${({ theme }) => theme.colors.lightGrey};
      }
      @media (max-width: 768px) {
        border-bottom: 0.4px solid ${({ theme }) => theme.colors.grey};
      }
    }

    & > ul {
      list-style: none;
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
        & a {
          display: block;
        }
        &:hover {
          /* background-color: ${({ theme }) => theme.colors.lightGrey}; */
          & a {
            color: ${({ theme }) => theme.colors.lightGrey};
          }
        }
      }
    }

    @media (min-width: 768px) {
      border-bottom: none;
      padding: 1rem;

      &:hover > ul,
      &:focus-within > ul {
        visibility: visible;
        opacity: 1;
        display: block;
        & li a {
          width: 100%;
        }
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
            onClick={() => toggleMenu(prev => !prev)}
          >
            {link.name}
          </Link>
          {/* Submenu */}
          {link.submenu && link.submenu.length > 0 ? (
            <ul aria-label="submenu">
              {submenu.map(sublink => (
                <li key={sublink.name}>
                  <Link to={`/products${sublink.link}`} className="nav-item">
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
