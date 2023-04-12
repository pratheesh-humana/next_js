import { useEffect } from "react";
import Image from "next/image";

import { title, img_contact } from "../styles/Contact.module.css";

const Contact = ({ setView }) => {
  useEffect(() => {
    setView(true);
  }, []);

  return (
    <>
      <header>
        <h1 className={title}>Contact</h1>
      </header>
      <div className={img_contact}>
        <Image
          src="/image.webp"
          width="500"
          height="350"
          alt="Contact Details"
        ></Image>
      </div>
    </>
  );
};

export default Contact;
