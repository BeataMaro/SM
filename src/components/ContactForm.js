import React from "react"
import styled from "styled-components"
import { useForm, ValidationError } from "@formspree/react"

const StyledForm = styled.form`
  display: grid;
`
const ContactForm = () => {
  const [state, handleSubmit] = useForm("ContactSelfMAX")
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="email">Adres e-mail</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" placeholder="Proszę o kontakt." />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Wyślij
      </button>
    </StyledForm>
  )
}

export default ContactForm
