import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <section className="page_404">
        <div className="container_404">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                  <h2 className="h2">Error 404 Not Found!</h2>

                  <p>
                    We are very sorry for inconvenience. It looks like you are
                    trying to accesss a page that has been deleted or never even
                    existed.
                  </p>

                  <Link className="link_404 btn" href="/">
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
