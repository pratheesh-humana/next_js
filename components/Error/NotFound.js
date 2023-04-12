import Link from "next/link";

import {
  page_404,
  container_404,
  text_center,
  four_zero_four_bg,
  contant_box_404,
  heading,
  link_404,
  para,
} from "../../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <section className={page_404}>
        <div className={container_404}>
          <div className={`row`}>
            <div className={`col-sm-12`}>
              <div className={`col-sm-10 col-sm-offset-1 ${text_center}`}>
                <div className={four_zero_four_bg}>
                  <h1 className={(text_center, heading)}>404</h1>
                </div>
                <div className={contant_box_404}>
                  <h2>Error 404 Not Found!</h2>
                  <p className={para}>
                    We are very sorry for inconvenience. It looks like you are
                    trying to accesss a page that has been deleted or never even
                    existed.
                  </p>
                  <Link className={`btn ${link_404}`} href="/">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
