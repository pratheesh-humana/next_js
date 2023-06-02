import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="navbar">
          <ul className="navbar_header">
            <Link className="items_nav left_align" href="#">
              <h1>CenterWell</h1>
              <p className="test_style">Specialty Pharmacy</p>
            </Link>
          </ul>
          <Link className="items_nav" href="/">
            <i className="fa-solid fa-phone icon_arjustment"></i>
            Contact us
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
