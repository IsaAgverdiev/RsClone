import * as React from 'react';
import { useState } from 'react';
import MapComponent from '../../../components/MapComponent/MapComponent';

import MapLoadingHolder from '../../Main/components/Map/components/MapLoadingHolder';

const Feature1 = () => {
  const [loading, setLoading] = useState(true);
  const handleMapLoading = () => setLoading(false);

  return (
    <div className="app-container">
      <h1>Feature1</h1>
      <div className='map-wrapper' style={{ position: "relative" }}>
        <MapComponent
          initialOptions={{ center: [27.64, 53.92] }}
          onLoaded={handleMapLoading}
        />
        {loading && <MapLoadingHolder />}
      </div>
    </div>
  );
};

export default Feature1;
