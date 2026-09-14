import React from 'react';
import { METRICS } from '../data/mockData';

export const MetricasBar: React.FC = () => {
  return (
    <section className="bg-white border-y border-slate-200/80 py-12 md:py-16 text-slate-900 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className={`pt-6 md:pt-0 ${idx % 2 === 0 ? '' : 'sm:border-l-0'} flex flex-col items-center justify-center space-y-2`}
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#b38237] tracking-tight">
                {metric.number}
              </span>
              <span className="text-slate-600 font-medium text-xs sm:text-sm uppercase tracking-wider">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
