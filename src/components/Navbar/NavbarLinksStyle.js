import styled from "styled-components"

export const StyledNavlist = styled.ul`
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
