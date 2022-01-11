import * as React from 'react';
import Navbar from '../../components/NavBar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar authorized={true} />
      <h1>Home</h1>
    </>
  );
};

export default Home;
