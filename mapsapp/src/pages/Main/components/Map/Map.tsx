import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import './Map.scss'
import "../../../../components/MapModal/mapModal.scss"
import MapComponent from "../../../../components/MapComponent";
import MapLoadingHolder from "./components/MapLoadingHolder";

const Map = () => {
  const [loading, setLoading] = useState(true);
  const handleMapLoading = () => setLoading(false);

  return (
    <>
      <div className='map-wrapper' style={{ position: "relative" }}>
        <MapComponent
          initialOptions={{ center: [37.60, 55.73] }}
          onLoaded={handleMapLoading}
        />
        {loading && <MapLoadingHolder />}
      </div>
    </>
  )
}

export default Map;