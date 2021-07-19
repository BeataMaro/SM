import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"
// import HeroImage from "../assets/products/Poliweglan/zadaszenia-z-poliweglanu3.jpg"
import { animationMoveY } from "../styles/Animation"

const StyledTitle = styled.h1`
  margin-left: 3rem;
`

const StyledText = styled.div`
  /* background-color: orangered; */
  padding: 3rem;

  p {
    color: ${({ theme }) => theme.colors.grey};
    line-height: 32px;

    strong {
      font-weight: 400;
    }
  }
`

const StyledHeader = styled.article`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const StyledHero = styled.div`
  width: 100%;
  height: 100%;
  .hero-image {
    max-width: 100%;
  }
`

const Header = ({ siteTitle }) => {
  const sloganRef = useRef(null)

  useEffect(() => {
    const slogan = sloganRef.current
    animationMoveY(slogan, true)
  }, [])

  return (
    <header>
      {/* <h1 ref={sloganRef}>
        <Link to="/">{siteTitle}</Link>
      </h1> */}
      <StyledTitle>
        Witaj na stronie <strong>Selfmax</strong>!
      </StyledTitle>
      <StyledHeader>
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
        <StyledHero>
          <StaticImage
            src="../assets/products/Poliweglan/zadaszenia-z-poliweglanu3.jpg"
            className="hero-image"
            alt="house"
          />
        </StyledHero>
      </StyledHeader>
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

// Photo by <a href="https://unsplash.com/@jonasjaekenmedia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jonas Jaeken</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
