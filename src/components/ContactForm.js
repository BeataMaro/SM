import React from "react"
import styled from "styled-components"
import { useForm, ValidationError } from "@formspree/react"

import { Button } from "../components/atoms/Button"

const StyledForm = styled.form`
  display: grid;
  grid-gap: 0.5rem;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.main};

  input,
  textarea {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.grey};
    padding: 10px;

    &:active {
      outline: none;
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.lightGrey};
    }
  }

  input {
    height: 2rem;
  }

  textarea {
    width: 300px;
    height: 150px;
    border: 1px solid grey;
  }
`

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
        <textarea id="message" name="message" />
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
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button type="submit" disabled={state.submitting}>
        Wyślij
      </Button>
    </StyledForm>
  )
}

export default ContactForm
