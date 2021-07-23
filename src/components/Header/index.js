import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { animationMoveY } from "../../styles/Animation"
import {
  StyledTitle,
  StyledText,
  StyledHeader,
  StyledHero,
} from "./HeaderStyle"

const Header = () => {
  const { file } = useStaticQuery(heroImage)
  const image = getImage(file.childImageSharp)
  console.log(image)

  const sloganRef = useRef(null)

  useEffect(() => {
    const slogan = sloganRef.current
    animationMoveY(slogan, true)
  }, [])

  return (
    <header>
      <StyledTitle ref={sloganRef}>
        Witaj na stronie <strong>Selfmax</strong>!
      </StyledTitle>
      <StyledHeader>
        <StyledHero>
          <GatsbyImage image={image} alt="" />
        </StyledHero>
        <StyledText>
          <p>
            Znajdziesz tutaj zakres naszej oferty oraz przykładowe realizacje.
            Specjalizujemy się w zadaszeniach z aluminium i jest to jedyny
            materiał, który stosujemy do budowy konstrukcji.
          </p>
          <p>
            Kierujemy się zasadą estetyki i trwałości, co szczególnie cenią
            sobie klienci, podejmujący z nami współpracę.
          </p>
          <p>
            {" "}
            Udzielamy <strong>10-letniej gwarancji</strong> na elementy
            konstrukcyjne oraz <strong>5-letniej gwarancji</strong> na elementy
            elektroniczne/ automatykę.
          </p>
          <p>
            Nie konkurujemy cenami, dlatego jeśli szukasz najtańszego produktu
            to tutaj go nie znajdziesz. Po prostu, na jakości nie da się
            zaoszczędzić – przekonasz się o tym z biegiem lat, obserwując swój
            dach pod naporem śniegu, lub targany porywistym wiatrem.
          </p>
          <p>
            {" "}
            Usługi wykonujemy kompleksowo, przygotowujemy podłoże, montujemy
            zadaszenie zgodnie z ustaleniami i doprowadzamy taras do stanu
            sprzed montażu.
          </p>
          <p>
            Jesteśmy otwarci na niestandardowe potrzeby klienta, jak również
            możemy dostarczyć materiały do samodzielnego montażu zadaszenia wraz
            z instruktażem.
          </p>
        </StyledText>
      </StyledHeader>
    </header>
  )
}

export default Header

export const heroImage = graphql`
  {
    file(
      relativePath: { eq: "products/Poliweglan/zadaszenia-z-poliweglanu3.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`

// Photo by <a href="https://unsplash.com/@jonasjaekenmedia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jonas Jaeken</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
