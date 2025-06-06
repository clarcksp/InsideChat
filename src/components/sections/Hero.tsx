import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { FeaturesModal } from './FeaturesModal';
import { createWhatsAppLink } from '../../utils/whatsapp';

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whatsappLink = createWhatsAppLink();

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Gerencie todos seus atendimentos <br />
              <span className="text-orange-600">via WhatsApp</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Centralize suas conversas, aumente a produtividade e melhore a satisfação dos seus clientes com nossa plataforma completa.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" href={whatsappLink}>Começar Gratuitamente</Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setIsModalOpen(true)}
              >
                Ver Recursos
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturesModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};