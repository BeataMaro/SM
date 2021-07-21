import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpen, faMobileAlt } from "@fortawesome/free-solid-svg-icons"

const StyledInfo = styled.div`
  text-align: center;
  height: 100%;
  background-color: orange;

  svg {
    color: white;
    font-size: 1rem;
  }
`

const ContactInfo = () => {
  return (
    <article>
      <StyledInfo>
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
          <FontAwesomeIcon icon={faMobileAlt} />
          +48 503 696 926
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelopeOpen} /> dariusz@lakomski.pl
        </p>
      </StyledInfo>
    </article>
  )
}

export default ContactInfo
