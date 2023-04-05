import { useEffect } from "react";
import Contact from "@/components/Contact";
import Head from "next/head";

const contact = ({ setView }) => {
  useEffect(() => {
    setView(true);
  }, []);

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Contact setView={setView} />
    </>
  );
};

export default contact;
