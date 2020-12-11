import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './sass/main.scss';
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />

    </div>
  );
}

export default App;
