import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Research from './pages/Research';
import CV from './pages/CV';
import ChineseProfile from './pages/ChineseProfile';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white flex flex-col items-center">
        {/* Main Wrapper */}
        <div className="w-full max-w-5xl px-6 md:px-12 py-12 flex-grow">
          
          {/* Site Header */}
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-2 font-serif">
              QINGFENG DING (丁庆锋)
            </h1>
            <p className="text-gray-500 font-sans tracking-wide uppercase text-sm md:text-base mt-4">
              Ph.D. Candidate in Applied Economics &bull; Central South University
            </p>
          </header>

          <Navigation />

          {/* Page Content */}
          <main className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/research" element={<Research />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/cn" element={<ChineseProfile />} />
            </Routes>
          </main>
        </div>
        
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
