import { useEffect } from "react";

import Head from "next/head";

import { ApolloProvider } from "@apollo/client";
import TableData from "@/components/ReactTable/TableData";
import { clientServiceHumana } from "@/api/apolloClient";

const Table = ({ setView }) => {
  useEffect(() => {
    setView(true);
  }, []);

  return (
    <>
      <Head>
        <title>React Table</title>
      </Head>
      <h1 style={{ textAlign: "center" }}>React Table</h1>
      <ApolloProvider client={clientServiceHumana}>
        <TableData setView={setView} />
      </ApolloProvider>
    </>
  );
};

export default Table;
