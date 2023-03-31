import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="navbar">
        <ul className="navbar_header">
          <Link className="items_nav left_align" href="#">
            <Image src="/humana.png" width="160" height="45" alt="logo"></Image>
          </Link>
        </ul>
          <Link className="items_nav" href="/">
            Home
          </Link>
          <Link className="items_nav" href="/registration">
            Patient Registraion
          </Link>
          <Link className="items_nav" href="/patient">
            Patient Details
          </Link>
          <Link className="items_nav" href="/contact">
            Contact
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
