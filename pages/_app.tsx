import { ReactNode } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Layout } from '../components/Layout';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
