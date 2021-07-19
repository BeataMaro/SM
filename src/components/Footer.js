import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  margin-top: auto;
  background-color: transparent;
  color: lightgray;
  padding: 1rem 3rem;

  & p {
    color: ${({ theme }) => theme.colors.grey};
    line-height: 1;
  }
  & a {
    color: hsl(90, 80%, 40%);
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <p>&copy; Copyright 2021</p>
      <p>
        Images:{" "}
        <a
          href="https:www.unsplash.com"
          rel="noreferrer"
          title="Unsplash"
          target="_blank"
        >
          www.unsplash.com
        </a>
      </p>
      <p>
        Icons:{" "}
        <a
          href="https://www.freepik.com"
          rel="noreferrer"
          title="Freepik"
          target="_blank"
        >
          Freepik
        </a>{" "}
        from{" "}
        <a
          href="https://www.flaticon.com/"
          rel="noreferrer"
          title="Flaticon"
          target="_blank"
        >
          www.flaticon.com
        </a>
      </p>
    </StyledFooter>
  )
}
