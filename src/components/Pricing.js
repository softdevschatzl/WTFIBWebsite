import React, { useState, useEffect, useRef } from 'react';
import './Pricing.css';

const Pricing = () => {
  // Split the plans to save space
  const limitedPlans = [
    { id: 1, name: 'Tagged MP3', price: 20, features: ['- Unlimited FREE downloads', '- 500K Audio Streams, Allowed Profit Performance'], bgColor: '#505050' },
    { id: 2, name: 'Untagged Limited', price: 40, features: ['- 500000 Audio Streams', '- 500000 Non-Monetized Video Streams', '- Broadcasting for up to 2 radio stations'], bgColor: '#505050' },
    { id: 3, name: 'Stems Limited', price: 60, features: ['- 500000 Audio Streams', '- 500000 Non-Monetized Video Streams', '- Broadcasting for up to 2 radio stations'], bgColor: '#505050' },
  ]
  const unlimitedPlans = [
    { id: 1, name: 'Unlimited Stems', price: 100, features: ['- Unlimited Distribution and Streaming Rights', '- Untagged WAV/MP3 and Track Stems'], bgColor: '#290d44' } ,
    { id: 2, name: 'Unlimited MP3/WAV', price: 60, features: ['- Untagged Beat WAV/MP3', '- Unlimited Distribution and Streaming Rights'], bgColor: '#290d44' },
    { id: 3, name: 'Exclusive License', price: 250, features: ['- Exclusive Track Stem License (Unlimited)'], bgColor: '#290d44' },
  ]

  const [shouldAnimateLimited, setShouldAnimateLimited] = useState(false);
  const [shouldAnimateUnlimited, setShouldAnimateUnlimited] = useState(false);

  const [showLimitedPlans, setShowLimitedPlans] = useState(false);
  const [showUnlimitedPlans, setShowUnlimitedPlans] = useState(false);

  const limitedPlansButtonRef = useRef(null);
  const unlimitedPlansButtonRef = useRef(null);

  // // Adds functionality for the fade/slide in animations
  // const limitedPlanRefs = useRef([]);
  // const unlimitedPlanRefs = useRef([]);

  const planRefs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      [limitedPlansButtonRef, unlimitedPlansButtonRef].forEach(ref => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

          if (isVisible) {
            ref.current.style.animationName = 'slideInFromLeft';
            ref.current.style.animationDuration = '1s';
            ref.current.style.animationFillMode = 'forwards';
          }
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const renderPlans = (plans, shouldAnimate) => {
    const reversedPlans = [...plans].reverse(); // Reversing the plans for the slide-in.
    return reversedPlans.map((plan, index) => (
      <div 
        key={plan.id} 
        // ref={(el) => (refs.current[index] = el)}
        className={`plan ${shouldAnimate ? 'animate' : ''}`}
        style={{ 
          backgroundColor: plan.bgColor, 
          animationDelay: `${index * 0.2}s`,
          animationDuration: `${plans.length * 0.5}s`
          }}> 
          <h4>{plan.name}</h4>
          <p className="pricing-price">${plan.price}</p>
          <ul className="features">
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className="subscribe-btn">Learn More</button>
      </div>
    ));
  };

  return (
    <div className="pricing">
      <h2>Licensing Options</h2>
      <div className="pricing-plans">
        <div className="plan-container">
          <div 
            className="persistent plan"
            ref={limitedPlansButtonRef}
          >
            <h4>Limited Plans</h4>
            <p>Our budget-friendly plans, when you're looking for tracks to help you get
              where you want to go right away.
            </p>
            <button 
              className="subscribe-btn" 
              onClick={() => { 
                setShowLimitedPlans(!showLimitedPlans); 
                setShouldAnimateLimited(true); 
                setShowUnlimitedPlans(false);
                setTimeout(() => setShouldAnimateLimited(false), 1000); // Resets after 1 second.
              }}
            >View</button>
          </div>
          <div 
            className="persistent unlim plan"
            ref={unlimitedPlansButtonRef}
          >
            <h4>Unlimited Plans</h4>
            <p>When you're looking for options that fit every need of your
              project, and then some.
            </p>
            <button 
              className="subscribe-btn" 
              onClick={() => { 
                setShowUnlimitedPlans(!showUnlimitedPlans)
                setShouldAnimateUnlimited(true);
                setShowLimitedPlans(false);
                setTimeout(() => setShouldAnimateLimited(false), 1000); // Resets after 1 second. 
              }}
            >View</button>
          </div>
        </div>
        <div className="displayed-plan-container">
          <div className="displayed-plans limited-plans">
            {showLimitedPlans && renderPlans(limitedPlans, shouldAnimateLimited)}
          </div>
          <div className="displayed-plans unlimited-plans">
            {showUnlimitedPlans && renderPlans(unlimitedPlans, shouldAnimateUnlimited)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
