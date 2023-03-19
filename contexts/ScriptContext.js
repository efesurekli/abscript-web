// contexts/ScriptContext.js
import { createContext } from 'react';

const ScriptContext = createContext({
  script: '',
  setScript: () => {},
});

export default ScriptContext;
