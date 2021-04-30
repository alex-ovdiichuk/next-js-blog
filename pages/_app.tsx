import { ReactNode } from 'react';
import type { AppProps } from 'next/app';

import { Layout } from '../components/Layout';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
