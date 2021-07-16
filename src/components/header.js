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
    <header>
      <h1 ref={sloganRef}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <p>
        Witaj na stronie Selfmax! Znajdziesz tutaj zakres naszej oferty oraz
        przykładowe realizacje. Specjalizujemy się w zadaszeniach z aluminium i
        jest to jedyny materiał, który stosujemy do budowy konstrukcji.
        Kierujemy się zasadą estetyki i trwałości, co szczególnie cenią sobie
        klienci, podejmujący z nami współpracę. Udzielamy 10 letniej gwarancji
        na elementy konstrukcyjne oraz 5 letniej gwarancji elementy
        elektroniczne/ automatykę. Nie konkurujemy cenami, dlatego jeśli szukasz
        najtańszego produktu to tutaj go nie znajdziesz. Po prostu, na jakości
        nie da się zaoszczędzić – przekonasz się o tym z biegiem lat, obserwując
        swój dach pod naporem śniegu, lub targany porywistym wiatrem. Usługi
        wykonujemy kompleksowo, przygotowujemy podłoże, montujemy zadaszenie
        zgodnie z ustaleniami i doprowadzamy taras do stanu sprzed montażu.
        Jesteśmy otwarci na niestandardowe potrzeby klienta, jak również możemy
        dostarczyć materiały do samodzielnego montażu zadaszenia wraz z
        instruktażem.
      </p>
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
