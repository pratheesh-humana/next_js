import NotFound from "@/components/Error/NotFound";
import Head from "next/head";

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
