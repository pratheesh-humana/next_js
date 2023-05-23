import { useState } from "react";
import Head from "next/head";

import { ApolloProvider } from "@apollo/client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import { clientServiceHumana } from "../api/apolloClient";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  const [view, setView] = useState(false);

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
      </Head>

      {view ? <Dashboard setView={setView} /> : <Header />}
      <ApolloProvider client={clientServiceHumana}>
        <Component {...pageProps} setView={setView} />
      </ApolloProvider>
      <Footer />
    </>
  );
};

export default App;
