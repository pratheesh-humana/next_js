import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

const contact = ({ setView }) => {
  useEffect(() => {
    setView(true);
  }, []);

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <h1 className="title">Contact</h1>
      <div className="img_contact">
        <Image src="/image.webp" width="500" height="350"></Image>
      </div>
    </>
  );
};

export default contact;
