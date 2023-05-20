import React, { useState, useEffect, useRef } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [plans, setPlans] = useState([
    { id: 1, name: 'Tagged MP3', price: 20, features: ['- Unlimited FREE downloads', '- 500K Audio Streams, Allowed Profit Performance'], bgColor: '#505050' },
    { id: 2, name: 'Untagged Limited', price: 40, features: ['- 500000 Audio Streams', '- 500000 Non-Monetized Video Streams', '- Broadcasting for up to 2 radio stations'], bgColor: '#505050' },
    { id: 3, name: 'Unlimited Stems', price: 100, features: ['- Unlimited Distribution and Streaming Rights', '- Untagged WAV/MP3 and Track Stems'], bgColor: 'rgb(0, 44, 65)' } ,
    { id: 4, name: 'Unlimited MP3/WAV', price: 60, features: ['- Untagged Beat WAV/MP3', '- Unlimited Distribution and Streaming Rights'], bgColor: 'rgb(0, 44, 65)' },
    { id: 5, name: 'Stems Limited', price: 60, features: ['- 500000 Audio Streams', '- 500000 Non-Monetized Video Streams', '- Broadcasting rights for up to 2 different radio stations'], bgColor: '#505050' },
    { id: 6, name: 'Exclusive License', price: 250, features: ['- Exclusive Track Stem License (Unlimited)'], bgColor: 'rgb(0, 44, 65)' },
  ]);

  const planRefs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
        planRefs.current.forEach((planRef, index) => {
            const rect = planRef.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

            if (isVisible) {
                planRef.style.animationDelay = `${index * 0.2}s`;
                planRef.style.animationPlayState = 'running';
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    return () => {
        window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="pricing">
      <h2>Licensing Options</h2>
      <div className="pricing-plans">
        {plans.map((plan, index) => (
          <div 
          key={plan.id} 
          ref={(el) => (planRefs.current[index] = el)}
          className="plan"
          style={{ backgroundColor: plan.bgColor }}>
            <h4>{plan.name}</h4>
            <p className="pricing-price">${plan.price}</p>
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="subscribe-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
