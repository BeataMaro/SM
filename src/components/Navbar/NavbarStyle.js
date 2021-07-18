import styled, { createGlobalStyle } from "styled-components"

export const ModalStyles = createGlobalStyle`
  body {
    overflow-y: scroll;
  }
`

export const StyledNavigation = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  margin: auto;
  padding: 0 1.5rem;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 2rem;
  }
`
//hamburger icon
export const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  z-index: 200;

  @media (max-width: 768px) {
    display: flex;
  }
`
export const Navbox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-height: 100vh;
    height: 100%;
    justify-content: flex-start;
    padding-top: 15vh;
    transition: all 0.32s linear;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.black};
  }

  &[open] {
    top: -100%;
  }
`
