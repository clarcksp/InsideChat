import React from 'react';
import { Carousel } from '../ui/Carousel';
import { features } from '../../data/features';

export const Features = () => {
  const featureCards = features.map((feature) => (
    <div key={feature.title} className="px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
        <feature.icon className="h-12 w-12 text-orange-600 mb-4" />
        <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
        <p className="text-gray-600 text-lg">{feature.description}</p>
      </div>
    </div>
  ));

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Recursos Principais</h2>
          <p className="mt-4 text-xl text-gray-600">
            Descubra como o InsideChat pode transformar seu atendimento
          </p>
        </div>
        <div className="mt-12">
          <Carousel items={featureCards} />
        </div>
      </div>
    </section>
  );
};