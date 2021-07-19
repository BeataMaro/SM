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
      border: 1px solid orange;
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
const StyledTitle = styled.h2`
  width: 100%;
  color: ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 2rem;
  letter-spacing: 3px;
`

const Contact = () => {
  const sectionRef = useRef(null)
  useEffect(() => {
    animationMoveY(sectionRef.current, true)
  }, [])

  return (
    <>
      <Seo title="Kontakt" />
      <section>
        <StyledTitle>Kontakt</StyledTitle>
        <StyledContactPage ref={sectionRef}>
          <article>
            <FormspreeProvider project="1723153946022771743">
              <ContactForm />
            </FormspreeProvider>
          </article>
          <article>
            <p>
              <a
                href="https://www.facebook.com/SelfmaxPolska"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} /> @SelfmaxPolska
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
      </section>
    </>
  )
}

export default Contact
