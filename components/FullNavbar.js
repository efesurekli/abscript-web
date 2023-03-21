import React, { useState } from 'react';
const FullNavBar = () => {
  return (
    <nav className="bg-black text-white py-4 px-8 flex justify-between items-center">
      <div className="font-mono text-lg font-semibold">
        about<span className="text-highlight">:blank</span>
      </div>
      <div className="flex space-x-8">
        <a
          href="#pricing"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById('pricing')
              .scrollIntoView({ behavior: 'smooth' });
          }}
          className="hover:text-highlight cursor-pointer"
        >
          Pricing
        </a>
        <a
          href="#features"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById('features')
              .scrollIntoView({ behavior: 'smooth' });
          }}
          className="hover:text-highlight cursor-pointer"
        >
          Features
        </a>
        <a href="mailto:efe@aboutblank.ai" className="hover:text-highlight">
          Contact
        </a>
      </div>
      <button
        className="bg-highlight text-black font-semibold py-2 px-4 rounded hover:bg-opacity-90"
        onClick={handleLaunchApp}
      >
        Launch the App
      </button>
    </nav>
  );
};

export default FullNavBar;
