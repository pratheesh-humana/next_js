import Head from "next/head";

import InternalServerError from "@/components/Error/InternalServerError";

const Internal_Server_Error = () => {
  return (
    <>
      <Head>
        <title>Internal Server Error</title>
      </Head>
      <InternalServerError />
    </>
  );
};

export default Internal_Server_Error;
