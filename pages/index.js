import Signin from "@/components/Signin";
import Head from "next/head";

const Home = ({ setView }) => {
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
