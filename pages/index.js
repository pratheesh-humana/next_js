import Signin from "@/components/Signin";
import Head from "next/head";
import pino  from "../logger";

const Home = ({ setView }) => {
  pino.info('Patient App Home Page');

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
