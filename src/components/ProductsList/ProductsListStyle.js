import styled from "styled-components"

export const StyledProducts = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-gap: 3rem;
`

export const StyledCategory = styled.article`
  width: 80%;
  min-height: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  transition: all 0.2s linear;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.1);
  }
`

export const StyledDescription = styled.div`
  height: 200px;
  display: grid;
  place-items: center;
  width: 80%;
  height: 50%;
  transform-origin: center;
  transition: all 0.2s ease-in;
  padding: 2.5rem 0;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`
export const StyledH3 = styled.h3`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 400;
  text-transform: uppercase;
  font-size: 2rem;
`

export const StyledThumbnail = styled.div`
  height: 200px;
  width: 320px;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`
