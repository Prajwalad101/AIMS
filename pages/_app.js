import '../styles/globals.css';

import { useRef } from 'react';

import Auth from '../components/wrappers/Auth';
import Provider from '../components/wrappers/Provider';
import Layout from '../components/wrappers/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const user = useRef();

  return (
    <>
      <Head>
        <link rel="icon" href="./aims-logo.png" />
      </Head>
      <Provider session={pageProps.session}>
        {Component.auth === false ? (
          <Component {...pageProps} />
        ) : (
          <Auth loggedUser={user}>
            <Layout user={user}>
              <Component {...pageProps} user={user} />
            </Layout>
          </Auth>
        )}
      </Provider>
    </>
  );
}

export default MyApp;
