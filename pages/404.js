import Head from "next/head";

import NotFound from "@/components/Error/NotFound";

const Error = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <NotFound />
    </>
  );
};

export default Error;
