'use client'

import type React from 'react';
import { useState } from 'react';
import { faqs } from '@/data';
import { PiToggleLeftDuotone, PiToggleRightDuotone } from "react-icons/pi";

const FaqAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <div key={faq.id} className="faq-item">
          <div
            className={`faq-question flex items-center justify-between text-xl font-semibold ${index === activeIndex ? 'text-blue-600 ' : ''}`}
            onClick={() => handleToggle(index)}
          >
            {faq.question}
            <div className='flex'>
              {index === activeIndex ? (
                <PiToggleRightDuotone className='toggleOpen' />
              ) : (
                <PiToggleLeftDuotone className='toggleClose' />
              )}
            </div>
          </div>
          <div className={`faq-answer text-gray-500 ${index === activeIndex ? 'active' : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
      <style jsx>{`
        .faq-accordion {
          max-width: 600px;
        }
        .faq-item {
          margin-bottom: 1rem;
        }
        .faq-question {
          background: white;
          border-bottom: 1px solid;
          padding: 1rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          padding: 0 1rem;
          border-radius: 0 0 5px 5px;
        }
        .faq-answer.active {
          max-height: 200px;
          padding: 1rem;
        }
        .toggleOpen, .toggleClose {
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default FaqAccordion;
