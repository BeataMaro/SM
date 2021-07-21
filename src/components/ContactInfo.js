import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const ContactInfo = () => {
  return (
    <article>
      {" "}
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
  )
}

export default ContactInfo
