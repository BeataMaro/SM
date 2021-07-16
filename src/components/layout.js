/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Normalize } from "styled-normalize"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../styles/GlobalStyles"
import Theme from "../styles/Theme"

import Navbar from "./Navbar"
import Footer from "./Footer"

const StyledWrapper = styled.main`
  max-width: 1400px;
  min-height: 200vh;
  margin: 0 auto;
  border: 1px solid red;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Normalize />
      <Navbar />

      <StyledWrapper>{children}</StyledWrapper>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
