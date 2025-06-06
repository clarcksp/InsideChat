import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Pricing } from './components/sections/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4">Entre em Contato</h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">E-mail:</span>{' '}
                  <a href="mailto:atendimento@insidechat.com.br" className="hover:text-indigo-400">
                    atendimento@insidechat.com.br
                  </a>
                </p>
                <p>
                  <span className="font-medium">Telefone:</span>{' '}
                  <a href="tel:1129376455" className="hover:text-indigo-400">
                    (11) 2937-6455
                  </a>
                </p>
              </div>
            </div>
            <div>
              <p className="text-gray-400">&copy; 2023 InsideChat. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;