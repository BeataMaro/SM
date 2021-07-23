import styled from "styled-components"

export const StyledTitle = styled.h1`
  width: 100%;

  position: relative;
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  font-weight: 400;

  strong {
    font-weight: 400;
  }
`

export const StyledText = styled.div`
  padding: 2rem 3rem;

  p {
    color: ${({ theme }) => theme.colors.grey};
    line-height: 32px;

    strong {
      font-weight: 400;
    }
  }
`

export const StyledHeader = styled.article`
  display: flex;
  flex-direction: column;

  /* @media (max-width: 768px) {
    flex-direction: column;
  } */
`

export const StyledHero = styled.div`
  width: 100%;
  height: 50%;
  .hero-image {
    max-width: 100%;
  }
`
