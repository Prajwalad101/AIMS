import "../styles/globals.css";

import Auth from "../components/wrappers/Auth";
import Provider from "../components/wrappers/Provider";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </Provider>
  );
}

export default MyApp;
