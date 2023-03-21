import React, { useState } from 'react';

const LightNavBar = () => {
  return (
    <nav className="bg-black text-white py-4 px-8 flex justify-between items-center">
      <div className="font-mono text-lg font-semibold">
        about<span className="text-highlight">:blank</span>
      </div>
    </nav>
  );
};

export default LightNavBar;
