import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <WelcomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
