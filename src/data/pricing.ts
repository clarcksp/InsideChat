import type { PricingPlan } from '../types';

export const plans: PricingPlan[] = [
  {
    name: 'Basic',
    price: 'R$ 165,00',
    description: 'Para pequenas empresas',
    features: [
      '1 número de WhatsApp',
      'Até 5 atendentes',
      'Chat em tempo real',
      'Relatórios avançados',
      'API de integração',
      'Chatbot básico'
    ]
  },
  {
    name: 'Turbo',
    price: 'R$ 325,00',
    description: 'Mais popular',
    features: [
      '2 números de WhatsApp',
      'Até 10 atendentes',
      'Chat em tempo real',
      'Relatórios avançados',
      'API de integração',
      'Chatbot básico'
    ],
    featured: true
  },
  {
    name: 'Pro',
    price: 'R$ 725,00',
    description: 'Para grandes equipes',
    features: [
      '4 números de WhatsApp',
      'Até 20 atendentes',
      'Chat em tempo real',
      'Relatórios completos',
      'API de integração',
      'Chatbot avançado',
      'Suporte prioritário',
      'Treinamento exclusivo'
    ]
  }
];