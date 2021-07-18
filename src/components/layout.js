/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Normalize } from "styled-normalize"

import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../styles/GlobalStyles"
import Theme from "../styles/Theme"

import Navbar from "./Navbar/Navbar"
import Footer from "./Footer"
import styled from "styled-components"

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Normalize />
      <StyledWrapper>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </StyledWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
