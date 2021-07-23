import React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import { StyledMap } from "./MapStyle"

const GoogleMap = () => {
  return (
    <article>
      <a
        href="https://www.google.pl/maps/place/Niedersulzerstra%C3%9Fe+2,+2225+Loidesthal,+Austria/@48.4996569,16.7371494,370m/data=!3m1!1e3!4m5!3m4!1s0x476cdf8378a49c5d:0x8f04462133bb276b!8m2!3d48.4998473!4d16.7382167"
        rel="noreferrer"
        title="Google Maps"
        target="_blank"
      >
        <StyledMap>
          {/* <StaticImage
            src="../assets/map.png"
            alt="Google map screen"
            className="map"
          /> */}
        </StyledMap>
      </a>
    </article>
  )
}

export default GoogleMap
