import React from "react"

import Header from "../components/Header"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Home = () => {
  return (
    <Layout>
      <Seo title="Strona Główna" />
      <Header />
    </Layout>
  )
}

export default Home
