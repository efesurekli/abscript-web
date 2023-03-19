// contexts/ScriptProvider.js
import React, { useState } from 'react';
import ScriptContext from './ScriptContext';

const ScriptProvider = ({ children }) => {
  const [script, setScript] = useState('');

  return (
    <ScriptContext.Provider value={{ script, setScript }}>
      {children}
    </ScriptContext.Provider>
  );
};

export default ScriptProvider;
