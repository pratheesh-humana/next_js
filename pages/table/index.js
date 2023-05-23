import { useEffect } from "react";

import Head from "next/head";

import TableData from "@/components/ReactTable/TableData";

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
      <TableData setView={setView} />
    </>
  );
};

export default Table;
