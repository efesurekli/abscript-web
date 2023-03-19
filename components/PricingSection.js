// components/PricingSection.js
import React from 'react';

const PricingSection = () => {
  return (
    <div id="pricing" className="bg-black text-white py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Pricing</h1>
      <div className="grid grid-cols-3 gap-8 my-16">
        <div className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-center">Starter</h2>
          <p className="text-4xl font-semibold text-center my-4">$6.90/mo</p>
          <ul className="list-disc pl-8">
            <li>50 content analyses per month</li>
            <li>Basic support</li>
            <li>Standard response speed</li>
          </ul>
          <button className="bg-highlight text-black font-semibold py-2 px-4 rounded mt-4 w-full">
            Choose Plan
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-center">Pro</h2>
          <p className="text-4xl font-semibold text-center my-4">$14.90/mo</p>
          <ul className="list-disc pl-8">
            <li>200 content analyses per month</li>
            <li>Priority support</li>
            <li>Fast response speed</li>
          </ul>
          <button className="bg-highlight text-black font-semibold py-2 px-4 rounded mt-4 w-full">
            Choose Plan
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-center">Unlimited</h2>
          <p className="text-4xl font-semibold text-center my-4">$48.90/mo</p>
          <ul className="list-disc pl-8">
            <li>Unlimited content analyses</li>
            <li>24/7 dedicated support</li>
            <li>Instant response speed</li>
          </ul>
          <button className="bg-highlight text-black font-semibold py-2 px-4 rounded mt-4 w-full">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
