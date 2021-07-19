import styled from "styled-components"

export const Button = styled.button`
  margin: 1rem 0 0 auto;
  background-color: ${({ empty, theme }) =>
    empty ? "transparent" : theme.colors.black};
  color: ${({ empty, theme }) =>
    empty ? theme.colors.greenGrey : theme.colors.white};
  padding: 0.5rem 1rem;
  border: 0.12em solid
    ${({ empty, theme }) =>
      empty ? theme.colors.greenGrey : theme.colors.black};
  border-radius: 2.5px;
  font-weight: 400;
  text-transform: capitalize;
  text-align: center;
  letter-spacing: 0.2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 50%;
    height: 20px;
    background-color: ${({ empty }) =>
      empty ? "transparent" : "rgba(0, 0, 0, 0.3)"};
    transition: all 0.25s ease-in;
    filter: blur(5px);
    z-index: -1;
  }

  &::before {
    left: 0;
    transform-origin: right;
    transition: all 0.35s ease-in;
  }

  &::after {
    right: 0;
    transform-origin: left;
    transform: skewY(5deg);
  }

  &:hover::before {
    transform: skewY(-8deg);
  }
  &:hover::after {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &:hover {
    background-color: ${({ empty, theme }) =>
      empty ? theme.colors.white : theme.colors.black};
    border-color: ${({ empty, theme }) =>
      empty ? theme.colors.white : theme.colors.black};
    color: ${({ empty, theme }) =>
      empty ? theme.colors.black : theme.colors.white};
  }
`
