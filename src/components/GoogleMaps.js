import React from "react"
import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 48.500017898780634,
      lng: 16.738152325686322,
    },
    zoom: 11,
  }

  return (
    // Important! Always set the container height explicitly
    <article style={{ height: "40vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={48.500017898780634}
          lng={16.738152325686322}
          text="My Marker"
        />
      </GoogleMapReact>
    </article>
  )
}

// import React from "react"
// import GoogleMapReact from "google-map-react"

// const isClient = typeof window !== "undefined"

// const AnyReactComponent = ({ text }) => <div>{text}</div>

// const GoogleMaps = ({address }) => {
//   const lat = parseFloat(address.lat)
//   const lng = parseFloat(address.lng)

//   return (
//     <section className="google-map">
//       <div className="map">
//         {isClient && (
//           <GoogleMapReact
//             bootstrapURLKeys={{ key: process.env.key }}
//             defaultCenter={[lat, lng]}
//             defaultZoom={14}
//           >
//                 <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//           </GoogleMapReact>
//         )}
//       </div>
//     </section>
//   )
// }

// export default GoogleMaps
