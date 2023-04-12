import { useEffect } from "react";
import { useRouter } from "next/router";

import {
  cover_background,
  p_0,
  error_page,
  heading,
} from "../../styles/InternalServerError.module.css";

const InternalServerError = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 8000);
  }, []);

  return (
    <>
      <section
        className={`bg-img ${(cover_background, p_0)}`}
        style={{
          backgroundImage: `url(https://bootdey.com/img/Content/bg1.jpg)`,
        }}
      >
        <div className={`container-fluid d-flex flex-column`}>
          <div
            className={`row align-items-center justify-content-center min-vh-100`}
          >
            <div className={`col-md-9 col-lg-6 mb-7`}>
              <div className={`text-center ${error_page}`}>
                <h1 className={`mb-0 text-secondary ${heading}`}>500</h1>
                <h2 className={`mb-4 text-white`}>Internal Server Error !</h2>
                <p className={`w-sm-80 mx-auto mb-4 text-white`}>
                  We are very sorry for inconvenience. It looks like you are
                  trying to accesss a page that has been deleted or never even
                  existed.
                </p>
                <div>
                  <a
                    href="#"
                    className={`btn btn-info btn-lg me-sm-2 mb-2 mb-sm-0`}
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    Return Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InternalServerError;
