import styled from "styled-components"

export const StyledForm = styled.form`
  flex: 1;
  width: 50%;
  margin: 2rem auto;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.greenGrey};
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.saira};
  background-color: ${({ theme }) => theme.colors.black};

  @media (max-width: 768px) {
    width: 100%;
  }

  input,
  textarea {
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.greenGrey};
    background-color: transparent;
  }

  input:focus,
  textarea:focus {
    border: 1px solid ${({ theme }) => theme.colors.white};
    outline: none;
  }
  label {
    position: relative;
    text-align: left;

    &:not([for="phone"])::after {
      display: inline-block;
      position: absolute;
      bottom: 0;
      right: 1rem;
      content: "*";
      font-size: 1.5rem;
    }
  }
`

export const StyledField = styled.div`
  display: grid;
`

export const StyledInfo = styled(StyledField)`
  height: 2rem;
  color: ${({ error }) => (error ? "red" : "green")};
`
