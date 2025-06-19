
import React from 'react';
import RippleButton from './RippleButton';
import RippleCard from './RippleCard';
import RippleEffect from './RippleEffect';

const RippleDemo = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ripple Effects Demo
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Click on any element below to see the ripple effect in different colors
          </p>
        </div>

        {/* Ripple Buttons */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
            Ripple Buttons
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <RippleButton variant="primary" onClick={() => console.log('Primary clicked')}>
              Primary Button
            </RippleButton>
            <RippleButton variant="secondary" onClick={() => console.log('Secondary clicked')}>
              Secondary Button
            </RippleButton>
            <RippleButton variant="success" onClick={() => console.log('Success clicked')}>
              Success Button
            </RippleButton>
            <RippleButton variant="danger" onClick={() => console.log('Danger clicked')}>
              Danger Button
            </RippleButton>
            <RippleButton variant="warning" onClick={() => console.log('Warning clicked')}>
              Warning Button
            </RippleButton>
            <RippleButton variant="info" onClick={() => console.log('Info clicked')}>
              Info Button
            </RippleButton>
          </div>
        </div>

        {/* Ripple Cards */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
            Ripple Cards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RippleCard 
              rippleColor="rgba(59, 130, 246, 0.4)"
              onClick={() => console.log('Blue card clicked')}
            >
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Blue Ripple</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Click me to see a blue ripple effect!
              </p>
            </RippleCard>
            
            <RippleCard 
              rippleColor="rgba(34, 197, 94, 0.4)"
              onClick={() => console.log('Green card clicked')}
            >
              <h4 className="text-xl font-semibold mb-2 text-green-600">Green Ripple</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Click me to see a green ripple effect!
              </p>
            </RippleCard>
            
            <RippleCard 
              rippleColor="rgba(239, 68, 68, 0.4)"
              onClick={() => console.log('Red card clicked')}
            >
              <h4 className="text-xl font-semibold mb-2 text-red-600">Red Ripple</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Click me to see a red ripple effect!
              </p>
            </RippleCard>
          </div>
        </div>

        {/* Custom Ripple Areas */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
            Custom Ripple Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RippleEffect 
              rippleColor="rgba(147, 51, 234, 0.5)"
              className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-8 rounded-lg cursor-pointer"
            >
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">
                  Purple Gradient
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Click anywhere in this area for a purple ripple
                </p>
              </div>
            </RippleEffect>
            
            <RippleEffect 
              rippleColor="rgba(245, 158, 11, 0.5)"
              className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 p-8 rounded-lg cursor-pointer"
            >
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-2 text-yellow-700 dark:text-yellow-300">
                  Golden Gradient
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Click anywhere in this area for a golden ripple
                </p>
              </div>
            </RippleEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RippleDemo;
