import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">This is the main content</main>
      <Footer />
    </div>
  );
}

export default App;
