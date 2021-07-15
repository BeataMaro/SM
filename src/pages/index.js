import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { FormspreeProvider } from "@formspree/react"
import ContactForm from "../components/form"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people {process.env.GATSBY_API_KEY}</h1>

    <h2>Hi people {process.env.MY_ENV}</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/carport1.jpeg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Carport"
      style={{ marginBottom: `1.45rem` }}
    />
    <FormspreeProvider project="1723153946022771743">
      <ContactForm />
    </FormspreeProvider>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
