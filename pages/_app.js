import "../styles/globals.css";

import { useRef } from "react";

import Auth from "../components/wrappers/Auth";
import Provider from "../components/wrappers/Provider";

function MyApp({ Component, pageProps }) {
  const user = useRef();

  return (
    <Provider session={pageProps.session}>
      <Auth loggedUser={user}>
        <Component {...pageProps} user={user} />
      </Auth>
    </Provider>
  );
}

export default MyApp;
