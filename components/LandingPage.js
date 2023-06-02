import LandingDashboard from "./LandingDashboard";
import styles from "../styles/LandingPage.module.css";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav_container}>
        <LandingDashboard />
      </div>
      <div className={styles.landing_page_container}>
        <div>
          <h1 className={styles.landing_page_heading}>
            Lorem to the Digital Provider Portal
          </h1>
          <p className={styles.landing_page_details}>
            Lorem at CenterWell Specialty Pharmacy, people are at the center of
            all we do. Our Digital Provider Portal will make it simpler for
            providers to prescribe medications. Easier information access means
            more time caring for patients.
          </p>
        </div>
        <div className={styles.landing_page_bottom_container}>
          <p className={styles.landing_page_providers}>
            With the new portal providers will get:
          </p>
          <ul className={styles.landing_page_items}>
            <li>Detailed order status</li>
            <li>Shipment delivery scheduling</li>
            <li>Action required alerts</li>
          </ul>
        </div>
        <button className={styles.landing_page_button}>Sign in</button>
      </div>
    </div>
  );
};

export default LandingPage;
