import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage.jsx';
import SobrePage from '@/pages/SobrePage.jsx';
import ServicosPage from '@/pages/ServicosPage.jsx';
import ContatoPage from '@/pages/ContatoPage.jsx';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
              <p className="text-xl text-muted-foreground mb-8">Página não encontrada</p>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
              >
                Voltar para home
              </a>
            </div>
          </div>
        } />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;