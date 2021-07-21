import React, { useEffect, useRef } from "react"
import ContactForm from "../components/ContactForm/ContactForm"
import styled from "styled-components"
import { FormspreeProvider } from "@formspree/react"
import { animationMoveY } from "../styles/Animation"

import ContactInfo from "../components/ContactInfo"
import GoogleMaps from "../components/GoogleMaps"
import Seo from "../components/seo"

const StyledContactPage = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  svg {
    color: black;
    font-size: 1rem;
  }
  article {
    @media (max-width: 768px) {
      grid-column: 1 / -1;
    }

    &:nth-of-type(1) {
      border: 1px solid main;
    }
    &:nth-of-type(2) {
      border: 1px solid blue;

      @media (min-width: 968px) {
      }
    }
    &:nth-of-type(3) {
      border: 1px solid yellow;
    }
  }

  /* @media (max-width: 768px) {
    grid-template-columns: 1fr;
  } */
`

const Contact = () => {
  const sectionRef = useRef(null)
  useEffect(() => {
    animationMoveY(sectionRef.current, true)
  }, [])

  return (
    <>
      <Seo title="Kontakt" />
      <section ref={sectionRef}>
        <h2 className="section-title">Kontakt</h2>
        <StyledContactPage ref={sectionRef}>
          <article>
            <FormspreeProvider project="1723153946022771743">
              <ContactForm />
            </FormspreeProvider>
          </article>
          <ContactInfo />
          <GoogleMaps />
        </StyledContactPage>
      </section>
    </>
  )
}

export default Contact
