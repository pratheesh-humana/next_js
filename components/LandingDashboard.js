import Link from "next/link";

const LandingDashboard = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navColor">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h1 className="text-white font-weight-bold">CenterWell</h1>
            <p className="test_style">Specialty Pharmacy</p>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto head">
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link active text-white font-weight-bold"
                  aria-current="page"
                >
                  <i className="fa-solid fa-phone icon_arjustment"></i>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LandingDashboard;
