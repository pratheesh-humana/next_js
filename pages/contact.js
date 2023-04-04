import Contact from "@/components/Contact";
import Head from "next/head";

const Contact = ({ setView }) => {
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

export default Contact;
