import React from "react"
import { Link } from "gatsby"

import Seo from "../../components/seo"

const poliweglan = () => {
  return (
    <>
      <Seo title="Zadaszenia z Poliwęglanu" />
      <section>
        <Link to="/products">Oferta</Link>
        <h2>Zadaszenia z poliwęglanu</h2>
        <p>
          Poliwęglan komorowy grubości 16 mm ze zintegrowanym filtrem UV tworzy
          optymalną osłonę przeciwsłoneczną. Zatrzymuje 30% światła dzięki czemu
          na twoim tarasie jest wciąż jasno, a jednocześnie promienie słoneczne
          przestają być uciążliwe. Połączenie tych zalet ze stosunkowo niskimi
          kosztami sprawia, że jest to najczęściej wybierane rozwiązanie.
        </p>
      </section>
    </>
  )
}

export default poliweglan
