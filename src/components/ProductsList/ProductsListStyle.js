import styled from "styled-components"

export const StyledProducts = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const StyledCategory = styled.article`
  /* width: 80%; */
  height: 250px;
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
  z-index: 2;
`
export const StyledH3 = styled.h3`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 400;
  text-transform: uppercase;
`

export const StyledThumbnail = styled.div`
  /* height: 200px;
  width: 320px; */
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  z-index: 1;
  transition: 0.2s ease-in;
  &:hover {
    opacity: 0.8;
  }
`
