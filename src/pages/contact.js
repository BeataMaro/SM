import React from "react"
import ContactForm from "../components/ContactForm"
import { FormspreeProvider } from "@formspree/react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const contact = () => {
  return (
    <Layout>
      <section>
        <Seo title="Kontakt" />
        <h2>Kontakt</h2>
        <article>
          <FormspreeProvider project="1723153946022771743">
            <ContactForm />
          </FormspreeProvider>
        </article>
        <article>
          <p>
            Dariusz Łakomski Tel.: +48 503 696 926 Email: dariusz@lakomski.pl
          </p>
          <p>Facebook: https://www.facebook.com/SefmaxPoska</p>
        </article>
        <article>
          Mapy Googla: Niedersulzerstraße 2, 2225 Loidesthal, Austria
        </article>
      </section>
    </Layout>
  )
}

export default contact
