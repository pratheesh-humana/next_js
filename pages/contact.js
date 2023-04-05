import Contact from "@/components/Contact";
import Head from "next/head";

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
