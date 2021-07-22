import React from "react"
import { Link } from "gatsby"

import Seo from "../../components/seo"

const lamele = () => {
  return (
    <>
      <Seo title="Lamele" />
      <section>
        <Link to="/products">Oferta</Link>
        <h2>Lamele</h2>
        <p>
          Zadaszenie z poszyciem z lameli to najbardziej funkcjonalne i
          efektowne rozwiązanie, które jest wizytówką twojego domu. Sterowane
          pilotem, dają pełną kontrolę nad ilością światła na tarasie. Tego typu
          pergola ochroni cię przed upałami w najgorętsze dni lub przed opadami,
          gdy pogoda się pogorszy.{" "}
        </p>
      </section>
    </>
  )
}

export default lamele
