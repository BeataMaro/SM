import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../../components/seo"

const ogrodyzimowe = () => {
  return (
    <>
      <Seo title="ogrody zimowe" />
      <section>
        <Link to="/products">Oferta</Link>
        <h2>Ogrody zimowe</h2>
        <p>
          Najlepszy sposób na przedłużenie sezonu letniego. W ogrodzie zimowym
          możemy zamontować ogrzewanie na podczerwień uruchamiane pilotem, które
          dosłownie w ciągu minuty ogrzeje twój taras. Możesz się nim cieszyć
          nawet wtedy, gdy aura nie zachęca do wychodzenia na zewnątrz.
        </p>
        <StaticImage
          src="../../assets/products/Ogrody-zimowe/ogrody-zimowe1.jpg"
          alt=""
        />
      </section>
    </>
  )
}

export default ogrodyzimowe
