import React, { useState, useEffect } from "react"
import axios from "axios"
import { Button } from "../components/atoms/Button"
import { StyledForm, StyledField, StyledInfo } from "./ContactFormStyle"

const ValidationForm = () => {
  /* NEW: validation for inputs */
  const [fieldErrors, setFieldErrors] = useState({})
  const validationRules = {
    email: val => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: val => !!val,
    name: val => !!val,
    phone: val => val && /[\d\s-]{7,12}$/.test(val),
  }
  const validate = () => {
    let errors = {}
    let hasErrors = false
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key])
      hasErrors |= errors[key]
    }
    setFieldErrors(prev => ({ ...prev, ...errors }))
    return !hasErrors
  }
  const renderFieldError = field => {
    if (fieldErrors[field]) {
      return <p className="errorMsg">Wypełnij pole poprawnie.</p>
    }
  }
  // Input Change Handling
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  useEffect(() => {
    // Only perform interactive validation after submit
    if (Object.keys(fieldErrors).length > 0) {
      validate()
    }
  }, [inputs])
  /* End new validation */

  const handleOnChange = event => {
    event.persist()
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
  }

  // Server State Handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      setFieldErrors({})
      setInputs({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    }
  }
  const handleOnSubmit = event => {
    event.preventDefault()
    if (!validate()) {
      return
    }
    setServerState({ submitting: true })

    axios({
      method: "POST",
      url: "https://formspree.io/f/xgerzwae",

      data: inputs,
    })
      .then(r => {
        handleServerResponse(true, "Wiadomość wysłana pomyślnie. Dziękujemy!")
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error)
      })
  }

  return (
    <div>
      <StyledForm onSubmit={handleOnSubmit} noValidate>
        <StyledField>
          <label htmlFor="name">Imię:</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleOnChange}
            value={inputs.name}
            className={fieldErrors.name ? "error" : ""}
          />
          <StyledInfo error>{renderFieldError("name")}</StyledInfo>
        </StyledField>
        <StyledField>
          <label htmlFor="email">Adres e-mail:</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleOnChange}
            value={inputs.email}
            className={fieldErrors.email ? "error" : ""}
            required
          />
          <StyledInfo error>{renderFieldError("email")}</StyledInfo>
        </StyledField>
        <StyledField>
          <label htmlFor="phone">Numer telefonu:</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            onChange={handleOnChange}
            value={inputs.phone}
            className={fieldErrors.phone ? "error" : ""}
          />
          <StyledInfo error>{renderFieldError("phone")}</StyledInfo>
        </StyledField>
        <StyledField>
          <label htmlFor="message">Wiadomość:</label>
          <textarea
            id="message"
            name="message"
            onChange={handleOnChange}
            value={inputs.message}
            className={fieldErrors.message ? "error" : ""}
            placeholder="Proszę o kontakt."
          ></textarea>
          <StyledInfo error>{renderFieldError("message")}</StyledInfo>
        </StyledField>

        {serverState.status && (
          <StyledInfo>
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          </StyledInfo>
        )}
        <Button empty type="submit" disabled={serverState.submitting}>
          Wyślij
        </Button>
      </StyledForm>
    </div>
  )
}

export default ValidationForm
