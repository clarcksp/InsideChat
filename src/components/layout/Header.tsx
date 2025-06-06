import React from 'react';
import { Button } from '../ui/Button';
import { createWhatsAppLink } from '../../utils/whatsapp';

export const Header = () => {
  const whatsappLink = createWhatsAppLink();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-orange-600">InsideChat</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-orange-600">Recursos</a>
            <a href="#benefits" className="text-gray-600 hover:text-orange-600">Benefícios</a>
            <a href="#pricing" className="text-gray-600 hover:text-orange-600">Preços</a>
          </nav>
          <Button href={whatsappLink}>Começar Agora</Button>
        </div>
      </div>
    </header>
  );
};