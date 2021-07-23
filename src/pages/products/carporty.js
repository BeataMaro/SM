import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import Seo from "../../components/seo"

const Carporty = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(query)

  edges.map(({ node }) =>
    console.log(node.childrenImageSharp[0].gatsbyImageData)
  )

  return (
    <>
      <Seo title="Carporty" />
      <section>
        <Link to="/products">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Wróć</span>
        </Link>
        <h2>Carporty</h2>
        <p>
          Wjazd o szerokości do 7,5 m bez konieczności wstawiania dodatkowych
          podpór pośrodku sprawia, że możesz swobodnie parkować 3 pojazdy.
          Poszycie paneli izolacyjnych w 100% chroni twoje auta przed
          nagrzewaniem i jednocześnie zapewnia wytrzymałość na obciążenie
          śniegiem odpowiednią nawet dla rejonów górskich.
        </p>
        {edges.map(({ node }) => (
          <GatsbyImage
            key={node.id}
            image={node?.childrenImageSharp[0]?.gatsbyImageData}
            alt=""
          />
        ))}
      </section>
    </>
  )
}

export default Carporty

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "products/Carporty" } }) {
      edges {
        node {
          id
          childrenImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`
