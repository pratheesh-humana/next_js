import Head from "next/head";

import Contact from "@/components/Contact";

const ContactPage = ({ setView }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Contact setView={setView} />
    </>
  );
};

export default ContactPage;
