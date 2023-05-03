import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ImagesSlider } from './components/ImagesSlider/ImagesSlider';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <ImagesSlider />
      </main>
      <Footer />
    </div>
  );
}

export default App;
