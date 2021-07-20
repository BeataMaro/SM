import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Button } from "../../components/atoms/Button"
import {
  StyledProducts,
  StyledCategory,
  StyledDescription,
  StyledH3,
  StyledThumbnail,
} from "./ProductsListStyle"

const ProductsList = () => {
  return (
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
  )
}

export default ProductsList
