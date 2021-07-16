import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

:root {
  --nav-height: 50px;
  scroll-padding-top: calc(var(--nav-height) + 10px);
  scroll-padding-top: 60px;
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
}

 *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fonts.saira};
    font-size: 16px;
    color: '#1a202c';
  }
    body {
    line-height: 1.5;
    letter-spacing: 0;
    overflow: hidden;
    background-color: #d2d8d6;  
  }
  ::selection {
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.green};
}

 ::placeholder {
    color: ${({ theme }) => theme.colors.greenGrey};
  }

a {
  text-decoration: none;

:hover {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  }
}
textarea {
  resize: none;
}

.logo {

  max-width: 100%;
  width: 7rem;
  max-height: 15vh;

  @media (max-width: 768px) {
    width: 6rem;
  }
  
}

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

.image {
  max-width: 100%;
}

.static-gif {
max-width: 100%;
width: 600px;
}

.active-link {
  color: slateblue;
}

`
