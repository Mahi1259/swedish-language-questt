import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>learn swedish</title>
        <meta
          name="description"
          content="swedish language quest"
        />
        <link rel="icon" href="/fav.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
