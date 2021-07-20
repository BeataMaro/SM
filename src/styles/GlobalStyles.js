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

  main {
    flex: 1 0 auto;
  }

  /* #gatsby-focus-wrapper {
  
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  } */
  body {

    line-height: 1.5;
    letter-spacing: 0;
    overflow: hidden;
  }
  ::selection {
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.green};
}

 ::placeholder {
    color: ${({ theme }) => theme.colors.greenGrey};
  }

  section, header {
  
  max-width: 1400px;
  min-height: 70vh;
  background-color: ${({ theme }) => theme.colors.white};
  border: .5px solid ${({ theme }) => theme.colors.lightGrey};
  margin: 0 auto;
  padding: 2rem;
  }
ul {
  list-style: none;
}
a {
  text-decoration: none;

:hover {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  }
}
.logo {

  max-width: 100%;
  width: 6rem;
  max-height: 15vh;

  @media (max-width: 768px) {
    width: 5.5rem;
  }
  
}

.image {
  max-width: 100%;
}

.static-gif {
max-width: 100%;
width: 600px;
}

`
