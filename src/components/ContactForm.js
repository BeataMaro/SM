import React from "react"
import styled from "styled-components"
import { useForm, ValidationError } from "@formspree/react"

import { Button } from "../components/atoms/Button"

const StyledForm = styled.form`
  display: grid;
`
const ContactForm = () => {
  const [state, handleSubmit] = useForm("ContactSelfMAX")
  if (state.succeeded) {
    return <p>Wiadomość wysłana pomyślnie. Dziękujemy!</p>
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">Imię</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="email">Adres e-mail</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="phone">Numer telefonu</label>
      <input id="phone" type="tel" name="phone" />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      <label htmlFor="message">Wiadomość</label>
      <textarea id="message" name="message" placeholder="Proszę o kontakt." />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button type="submit" disabled={state.submitting}>
        Wyślij
      </Button>
    </StyledForm>
  )
}

export default ContactForm
