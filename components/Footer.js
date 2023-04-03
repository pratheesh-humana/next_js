import Head from "next/head";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Humana
              </h5>
              <p>
                At Humana, our cultural foundation is aligned to helping members
                achieve their best health by delivering personalized,
                simplified, whole-person healthcare experiences. Recognizing
                healthcare needs continue to evolve for each person, for each
                family and for each community.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Products
              </h5>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Humana
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Creativity
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  SourceFiles
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Health
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Useful Links
              </h5>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Your Account
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Become an Affiliates
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Shipping Charges
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Help
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i className="fas fa-home mr-3"></i>New York, NY 2323, US
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i>humana@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i>+91 78459662515
              </p>
              <p>
                <i className="fas fa-print mr-3"></i>+01 335 633 77
              </p>
            </div>
            <hr className="mb-4" />
            <div className="row align-items-center">
              <div className="col-md-7 col-lg-8 text_copy">
                <p>
                  Copyright @2020 All rights reserved by :
                  <a href="#" style={{ textDecoration: "none" }}>
                    <strong className="text-warning"> Humana</strong>
                  </a>
                </p>
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="text-center text-md-right">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="btn-floating btn-sm text-white"
                        style={{ fontSize: "23px" }}
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="btn-floating btn-sm text-white"
                        style={{ fontSize: "23px" }}
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>{" "}
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="btn-floating btn-sm text-white"
                        style={{ fontSize: "23px" }}
                      >
                        <i className="fab fa-google-plus"></i>
                      </a>
                    </li>{" "}
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="btn-floating btn-sm text-white"
                        style={{ fontSize: "23px" }}
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="btn-floating btn-sm text-white"
                        style={{ fontSize: "23px" }}
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
