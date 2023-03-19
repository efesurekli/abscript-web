import '../styles/tailwind.css';
import '../styles/globals.css'; // Add this line
import ScriptProvider from '../contexts/ScriptProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ScriptProvider>
      <Component {...pageProps} />;
    </ScriptProvider>
  );
}

export default MyApp;
