import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const about = () => {
  return (
    <Layout>
      <section>
        <Seo title="o nas" />
        <h2>O nas</h2>
        <p>
          Selfmax doskonali się w montażu zadaszeń aluminiowych od 2001 roku. Ze
          względu na silny, a przede wszystkim szybki rozwój firmy, nasza
          centrala została przeniesiona do Loidesthal na północ od Wiednia. Nasz
          magazyn i powierzchnia wystawiennicza obecnie zajmują 5000 m². W
          Polsce nasze usługi są dostępne od 2020 roku. Podobnie jak to ma
          miejsce w Austrii naszą misją jest dostarczanie klientom produktów i
          usług o bezkompromisowej jakości.
        </p>
      </section>
    </Layout>
  )
}

export default about
