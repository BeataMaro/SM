import React from "react"

import ProductsList from "../../components/ProductsList"
import Seo from "../../components/seo"

const index = () => {
  return (
    <>
      <Seo title="Produkty" />
      <section>
        <h2 className="section-title">Nasza oferta</h2>
        <ProductsList />
      </section>
    </>
  )
}

export default index
