import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Work from './components/Work';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Work />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
