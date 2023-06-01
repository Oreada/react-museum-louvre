import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import { VisitingPage } from './pages/VisitingPage/VisitingPage';

function App() {
  return (
    <div className="wrapper">
      <Header />
      {/* <main className="main"> */}
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/visiting' element={<VisitingPage />} />
      </Routes>
      {/* </main> */}
      <Footer />
    </div>
  );
}

export default App;
