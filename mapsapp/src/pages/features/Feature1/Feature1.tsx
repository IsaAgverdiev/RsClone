import * as React from 'react';
import { useState } from 'react';
import Map from '../../Main/components/Map'
import MapLoadingHolder from '../../Main/components/Map/components/MapLoadingHolder';

const Feature1 = () => {
  const [loading, setLoading] = useState(true);
  const handleMapLoading = () => setLoading(false);

  console.log('%cFeature1.tsx line:10 loading', 'color: #007acc;', loading);
  return (
    <div className="app-container">
      <h1>Feature1</h1>
      <div className='map-wrapper' style={{ position: "relative" }}>
        <Map
          initialOptions={{ center: [20.0983, 40.7038] }}
          onLoaded={handleMapLoading}
        />
        {loading && <MapLoadingHolder />}
      </div>
    </div>
  );
};

export default Feature1;
