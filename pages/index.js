import Head from "next/head";

import { useSession, signIn, signOut } from "next-auth/react";

import Signin from "@/components/Signin";

const Home = ({ setView }) => {
  const session = useSession();
  if (session.data === null) {
    return <button onClick={signIn}>Login</button>;
  }
  console.log("Session", session);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Signin setView={setView} />
    </>
  );
};

export default Home;
