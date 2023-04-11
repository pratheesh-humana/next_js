import Signup from "@/components/Signup";
import Head from "next/head";
import ClientOnly from "@/components/ClientOnly";

const Registration = () => {
  return (
    <>
      <Head>
        <title>Registration</title>
      </Head>
      <ClientOnly>
        <Signup />
      </ClientOnly>
    </>
  );
};

export default Registration;
