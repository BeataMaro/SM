import React, { useEffect, useRef } from "react"
import ContactForm from "../components/ContactForm"
import styled from "styled-components"
import { FormspreeProvider } from "@formspree/react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

import { animationMoveY } from "../styles/Animation"
import Seo from "../components/seo"

const StyledContactPage = styled.section`
  display: flex;
  svg {
    /* background-color: grey; */
    color: black;
    font-size: 2rem;
  }
`

const Contact = () => {
  const sectionRef = useRef(null)
  useEffect(() => {
    animationMoveY(sectionRef.current, true)
  }, [])

  return (
    <>
      <Seo title="Kontakt" />
      <StyledContactPage ref={sectionRef}>
        <h2>Kontakt</h2>
        <article>
          <FormspreeProvider project="1723153946022771743">
            <ContactForm />
          </FormspreeProvider>
        </article>
        <article>
          <p>
            <a
              href="https://www.facebook.com/SefmaxPoska"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />{" "}
            </a>
          </p>
          <p>Dariusz Łakomski</p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            +48 503 696 926
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> dariusz@lakomski.pl
          </p>
        </article>
        <article>
          Mapy Googla: Niedersulzerstraße 2, 2225 Loidesthal, Austria
        </article>
      </StyledContactPage>
    </>
  )
}

export default Contact
