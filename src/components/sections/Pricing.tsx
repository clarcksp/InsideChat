import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { Button } from '../ui/Button';
import { plans } from '../../data/pricing';
import { createWhatsAppLink } from '../../utils/whatsapp';
import clsx from 'clsx';

export const Pricing = () => {
  const whatsappLink = createWhatsAppLink();

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Planos e Preços</h2>
          <p className="mt-4 text-xl text-gray-600">Escolha o plano ideal para seu negócio</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                'bg-white rounded-xl shadow-sm p-8',
                plan.featured && 'ring-2 ring-orange-600 scale-105'
              )}
            >
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-gray-600 mt-2">{plan.description}</p>
              <div className="mt-4 mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? 'default' : 'outline'}
                className="w-full"
                href={whatsappLink}
              >
                Começar Agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};