import * as React from 'react';
import MapboxMap from './components/map';

const Main: React.FC = () => {
  return (

    <div className='main-page'>
      <aside className='aside-menu'>
        <div>Hi there!</div>
      </aside>
      <MapboxMap />
    </div>
  );
};

export default Main;
