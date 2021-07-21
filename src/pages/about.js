import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { Button } from "../components/atoms/Button"
import Seo from "../components/seo"

const About = () => {
  const { file } = useStaticQuery(query)
  const aboutImg = getImage(file.childImageSharp)
  console.log(aboutImg)
  return (
    <>
      <Seo title="o nas" />
      <section>
        <h2 className="section-title">O nas</h2>
        <p>
          Selfmax doskonali się w montażu zadaszeń aluminiowych od 2001 roku. Ze
          względu na silny, a przede wszystkim szybki rozwój firmy, nasza
          centrala została przeniesiona do Loidesthal na północ od Wiednia. Nasz
          magazyn i powierzchnia wystawiennicza obecnie zajmują 5000 m². W
          Polsce nasze usługi są dostępne od 2020 roku. Podobnie jak to ma
          miejsce w Austrii naszą misją jest dostarczanie klientom produktów i
          usług o bezkompromisowej jakości.
        </p>
        <Link to="/products">
          <Button empty>Oferta</Button>
        </Link>
        <GatsbyImage image={aboutImg} alt="" />
      </section>
    </>
  )
}

export default About

export const query = graphql`
  query myQuery {
    file(relativeDirectory: { eq: "about" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`
