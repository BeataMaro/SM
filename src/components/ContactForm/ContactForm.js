import React from "react"

import { useForm, ValidationError } from "@formspree/react"

import { Button } from "../atoms/Button"
import { StyledForm } from "./ContactFormStyle"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("ContactSelfMAX")
  if (state.succeeded) {
    return (
      <StyledForm onSubmit={handleSubmit} autocomplete="off">
        <label htmlFor="name">Imię</label>
        <input id="name" type="text" name="name" />

        <label htmlFor="email">Adres e-mail</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="phone">Numer telefonu</label>
        <input id="phone" type="numeric" name="phone" />
        <ValidationError
          style={{ color: "red" }}
          prefix="Phone"
          field="phone"
          errors={state.errors}
        />

        <label htmlFor="message">Wiadomość</label>
        <textarea
          id="message"
          name="message"
          rows="10"
          cols="10"
          maxlength="250"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <p>Wiadomość wysłana pomyślnie. Dziękujemy!</p>
        <Button empty type="submit" disabled={state.submitting}>
          Wyślij
        </Button>
      </StyledForm>
    )
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">Imię</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="email">Adres e-mail</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="phone">Numer telefonu</label>
      <input id="phone" type="numeric" name="phone" />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      <label htmlFor="message">Wiadomość</label>
      <textarea
        id="message"
        name="message"
        rows="10"
        cols="10"
        maxlength="250"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button type="submit" disabled={state.submitting}>
        Wyślij
      </Button>
    </StyledForm>
  )
}

export default ContactForm
