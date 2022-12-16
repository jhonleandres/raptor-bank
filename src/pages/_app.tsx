import type { AppProps } from 'next/app';

import 'src/styles/globals.css';

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default MyApp;
