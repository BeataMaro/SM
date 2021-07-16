import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Logo() {
  const { file } = useStaticQuery(query)
  const image = getImage(file.childImageSharp)

  return (
    <Link className="logo" to="/">
      <GatsbyImage
        image={image}
        alt="Logo selfMAX"
        // style={{ width: "100px", maxWidth: "100%" }}
        className="logo"
      />
      {/* <StaticImage
        src="../assets/selfMAX-logo.png"
        alt="Logo selfMAX"
        // style={{ width: "100px", maxWidth: "100%" }}
        className="logo"
      /> */}
    </Link>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "selfMAX-logo.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`
