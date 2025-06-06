import {
  EyeIcon,
  UsersIcon,
  ChartBarIcon,
  UserGroupIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import type { Feature } from '../types';

export const features: Feature[] = [
  {
    icon: EyeIcon,
    title: 'Visibilidade e controle das conversas pelo Gestor',
    description: 'Acompanhe todas as interações em tempo real, monitore o desempenho da equipe e garanta a qualidade do atendimento com acesso completo às conversas e métricas importantes.'
  },
  {
    icon: UsersIcon,
    title: 'Multi atendimento',
    description: 'Permita que sua equipe atenda múltiplos clientes simultaneamente, distribuindo as conversas de forma inteligente e mantendo a organização e eficiência do atendimento.'
  },
  {
    icon: ChartBarIcon,
    title: 'Relatórios detalhados',
    description: 'Tome decisões baseadas em dados com relatórios completos sobre tempo de resposta, satisfação do cliente, volume de atendimentos e performance da equipe.'
  },
  {
    icon: UserGroupIcon,
    title: 'Gestão de Equipe',
    description: 'Configure diferentes níveis de acesso, monitore a produtividade individual e gerencie escalas de trabalho para otimizar o atendimento ao cliente.'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Automatize e disponibilize auto atendimento',
    description: 'Crie fluxos automatizados de atendimento, configure respostas rápidas e implemente chatbots para resolver demandas simples e agilizar o atendimento.'
  }
];