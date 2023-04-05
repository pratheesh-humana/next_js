import InternalServerError from "@/components/Error/InternalServerError";
import Head from "next/head";

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
