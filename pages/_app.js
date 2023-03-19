import '../styles/tailwind.css';
import '../styles/globals.css'; // Add this line

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
