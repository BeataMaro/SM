import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { Button } from "../../components/atoms/Button"

import Seo from "../../components/seo"

const StyledProducts = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-gap: 3rem;
`

const StyledCategory = styled.article`
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

const StyledDescription = styled.div`
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
const StyledH3 = styled.h3`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 400;
  text-transform: uppercase;
  font-size: 2rem;
`

const StyledThumbnail = styled.div`
  height: 200px;
  width: 320px;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`

const index = () => {
  return (
    <>
      <Seo title="Produkty" />
      <section>
        <h2>Nasza oferta</h2>
        <StyledProducts>
          <StyledCategory>
            <StyledDescription>
              <StyledH3>Ogrody Zimowe</StyledH3>
              <Link to="/products/ogrodyzimowe">
                <Button>Sprawdź</Button>
              </Link>
            </StyledDescription>
            <StyledThumbnail>
              <StaticImage
                src="../../assets/products/Ogrody-zimowe/ogrody-zimowe1.jpg"
                alt=""
              />
            </StyledThumbnail>
          </StyledCategory>
          <StyledCategory>
            <StyledDescription>
              <StyledH3>Dachy Rzymskie</StyledH3>
              <Link to="/products/dachyrzymskie">
                <Button>Sprawdź</Button>
              </Link>
            </StyledDescription>
            <StyledThumbnail>
              <StaticImage
                src="../../assets/products/Dachy-rzymskie/dachy-rzymskie1.jpg"
                alt="Dachy rzymskie"
              />
            </StyledThumbnail>
          </StyledCategory>
          <StyledCategory>
            <StyledDescription>
              <StyledH3>Carporty</StyledH3>
              <Link to="/products/carporty">
                <Button>Sprawdź</Button>
              </Link>
            </StyledDescription>
            <StyledThumbnail>
              <StaticImage
                src="../../assets/products/Carporty/carporty2.jpg"
                alt="Carporty"
              />
            </StyledThumbnail>
          </StyledCategory>
          <StyledCategory>
            <StyledDescription>
              <StyledH3>Lamele</StyledH3>
              <Link to="/products/lamele">
                <Button>Sprawdź</Button>
              </Link>
            </StyledDescription>
            <StyledThumbnail>
              <StaticImage
                src="../../assets/products/Lamele/lamele2.jpg"
                alt="Lamele"
              />
            </StyledThumbnail>
          </StyledCategory>
          <StyledCategory>
            <StyledDescription>
              <StyledH3>Zadaszenia z poliwęglanu</StyledH3>
              <Link to="/products/poliweglan">
                <Button>Sprawdź</Button>
              </Link>
            </StyledDescription>
            <StyledThumbnail>
              <StaticImage
                src="../../assets/products/Poliweglan/zadaszenia-z-poliweglanu2.jpg"
                alt="Zadaszenia z poliwęglanu"
              />
            </StyledThumbnail>
          </StyledCategory>
          <StyledCategory>
            <StyledDescription>
              <StyledH3>Zabudowa</StyledH3>
              <Link to="/products/zabudowa">
                <Button>Sprawdź</Button>
              </Link>
            </StyledDescription>
            <StyledThumbnail>
              <StaticImage
                src="../../assets/products/Zabudowa/ścianka szklana realizacja.jpg"
                alt="Zabudowa - ścianka szklana"
              />
            </StyledThumbnail>
          </StyledCategory>
        </StyledProducts>
      </section>
    </>
  )
}

export default index
