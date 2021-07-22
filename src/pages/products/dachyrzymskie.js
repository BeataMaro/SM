import React from "react"
import { Link } from "gatsby"

import Seo from "../../components/seo"

const dachyrzymskie = () => {
  return (
    <>
      <Seo title="Dachy Rzymskie" />
      <section>
        <Link to="/products">Oferta</Link>
        <h2>Dachy rzymskie</h2>
        <p>
          Szczególnie polecane na lato, otwierane i zamykane zdalnie. Poszycie
          jest wykonane z mocnego, wodoodpornego płótna, z możliwością
          zamontowania oświetlenia zintegrowanego z konstrukcją. Dach rzymski
          tworzy na twoim tarasie przytulny, wakacyjny klimat.
        </p>
      </section>
    </>
  )
}

export default dachyrzymskie
