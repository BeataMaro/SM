import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

body {
    color: pink;
}

ul {
    list-style: none;
    li {
        cursor: pointer;
        a {
        text-decoration: none;
    }
  }
}
`
