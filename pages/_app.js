import "../styles/globals.css";

import { useRef } from "react";

import Auth from "../components/wrappers/Auth";
import Provider from "../components/wrappers/Provider";
import Layout from "../components/wrappers/Layout";

function MyApp({ Component, pageProps }) {
  const user = useRef();
  const userSession = useRef();

  return (
    <Provider session={pageProps.session}>
      <Auth loggedUser={user} userSession={userSession}>
        <Layout user={user}>
          <Component {...pageProps} user={user} userSession={userSession} />
        </Layout>
      </Auth>
    </Provider>
  );
}

export default MyApp;
