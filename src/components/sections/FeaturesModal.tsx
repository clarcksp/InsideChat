import React from 'react';
import { Modal } from '../ui/Modal';

interface FeaturesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeaturesModal: React.FC<FeaturesModalProps> = ({ isOpen, onClose }) => {
  const features = [
    {
      title: 'Multiatendimento',
      description: 'Gerenciamento de múltiplas conversas de clientes simultaneamente em um único painel, otimizando a comunicação e reduzindo o tempo de resposta.'
    },
    {
      title: 'Gestão de mensagens via WhatsApp',
      description: 'Integração com o WhatsApp Business para facilitar o atendimento e a comunicação com clientes.'
    },
    {
      title: 'Canais de comunicação',
      description: 'Possibilidade de integrar com diversos canais de comunicação, como Telegram, Instagram, Facebook, entre outros.'
    },
    {
      title: 'Multi Departamentos',
      description: 'Criação de departamentos específicos para lidar com diferentes tipos de solicitações, otimizando o atendimento e garantindo que cada equipe esteja preparada para as necessidades dos clientes.'
    },
    {
      title: 'CRM Kanban',
      description: 'Ferramenta visual para planejamento e monitoramento em CRM, com recursos como quadro virtual e adesivos.'
    },
    {
      title: 'Chatbot inteligente',
      description: 'Criação e configuração de chatbots intuitivos e fáceis de usar, automatizando o atendimento e liberando a equipe para tarefas mais estratégicas.'
    },
    {
      title: 'Inteligência Artificial',
      description: 'Integração com ferramentas de IA, como o ChatGPT, para otimizar a comunicação e a automação de processos.'
    },
    {
      title: 'Dashboard em tempo real',
      description: 'Monitoramento em tempo real das conversas e do atendimento, permitindo que a equipe tome decisões estratégicas e otimize o atendimento.'
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Os principais recursos do InsideChat" size="xl">
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-orange-600 mb-2">
              {feature.title}
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Modal>
  );
};