import styled from "styled-components"

export const StyledForm = styled.form`
  display: grid;
  grid-gap: 0.5rem;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.darkGrey};

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
    resize: none;
    border: 1px solid grey;
    border-radius: 3px;
  }
`
