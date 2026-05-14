import React from 'react';
import Navbar from './components/Navbar';
import MiddleComponent from './components/MiddleComponent';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar title="My Website" />
      <MiddleComponent content="Welcome to my website!" />
      <Footer />
    </div>
  );
};

export default App;