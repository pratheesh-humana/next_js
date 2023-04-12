import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import Head from "next/head";
import { useState } from "react";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../api/apolloClient";

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
      </Head>

      {view ? <Dashboard setView={setView} /> : <Header />}
      <ApolloProvider client={client}>
        <Component {...pageProps} setView={setView} />
      </ApolloProvider>
      <Footer />
    </>
  );
};

export default App;
