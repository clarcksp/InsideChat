import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface CarouselProps {
  items: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + items.length) % items.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
      </button>
      
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-600" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={clsx(
              'w-2 h-2 rounded-full transition-colors',
              index === currentIndex ? 'bg-orange-600' : 'bg-gray-300'
            )}
          />
        ))}
      </div>
    </div>
  );
};