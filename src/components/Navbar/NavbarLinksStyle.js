import styled from "styled-components"

export const StyledNavlist = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  /* @media (max-width: 768px) {
    flex-direction: column;
  } */

  li {
    position: relative;
    width: 100%;
    transition: all 0.5s ease-in;
    border-bottom: 0.4px solid transparent;

    @media (max-width: 768px) {
      padding: 1rem;
      font-size: 0.8rem;
    }

    &:hover {
      cursor: pointer;
      & > .nav-item:not(.active-link) {
        color: ${({ theme }) => theme.colors.main};
      }
      @media (max-width: 768px) {
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
      color: ${({ theme }) => theme.colors.main};
    }

    /* submenu style */
    & > ul {
      visibility: hidden;
      background-color: ${({ theme }) => theme.colors.lightGrey};
      color: ${({ theme }) => theme.colors.grey};
      opacity: 0;
      display: none;
      position: absolute;
      transition: all 0.5s ease;
      margin-top: 3.6rem;
      top: 0;
      left: 0;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
      z-index: 100;

      & li {
        transition: 0.5s ease;
        padding: 1.5rem;

        .nav-item {
          display: block;
          width: 100%;
        }

        .active-link {
          color: ${({ theme }) => theme.colors.main};
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
