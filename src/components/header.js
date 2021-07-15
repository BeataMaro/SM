import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { animationMoveY } from "../styles/Animation"

const Header = ({ siteTitle }) => {
  const sloganRef = useRef(null)

  useEffect(() => {
    const slogan = sloganRef.current
    animationMoveY(slogan, true)
  }, [])

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }} ref={sloganRef}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
