import React, { Fragment } from "react";

const PortfolioComponent = () => {
  return (
    <Fragment>
      {/* PROJECTS */}
      <section className="page-section portfolio" id="projects">
        <div className="container">
          {/* Portfolio Section Heading */}
          <h2 className="page-section-heading portfolio-heading text-center text-uppercase text-secondary mb-0">
            Projects
          </h2>
          {/*  Portfolio Grid Items */}
          <div className="row justify-content-center">
            {/*  Portfolio Item 1 */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal1"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="https://user-images.githubusercontent.com/64327599/164615891-63604ac2-fd7d-4492-ad64-7d89e3c3740a.PNG"
                  alt="Newsapp Img"
                />
              </div>
              <h5 className="text-center" style={{ marginTop: "1rem" }}>
                Newsapp
              </h5>
            </div>

            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal2"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="https://user-images.githubusercontent.com/64327599/164647111-3f240025-2157-4cf1-8a91-daa545d3cc2a.PNG"
                  alt="LoginVerification img"
                />
              </div>
              <h5 className="text-center" style={{ marginTop: "1rem" }}>
                Login Verification
              </h5>
            </div>

            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal3"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="https://user-images.githubusercontent.com/64327599/164681140-d1386440-77ca-496a-9847-46778adcd205.PNG"
                  alt="TeeCom img"
                />
              </div>
              <h5 className="text-center" style={{ marginTop: "1rem" }}>
                TeeCom
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Portfolio Modals--> */}

      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabIndex="-1"
        aria-labelledby="portfolioModal1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Newsapp
                    </h2>

                    <div className="divider-custom"></div>

                    {/* <iframe
                      width="400"
                      height="300"
                      src="https://www.youtube.com/embed/FWkwf0gxT7o"
                      title="Newsapp Video Demonstration"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe> */}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/neeraj-22/newsapp"
                    >
                      <img
                        src={
                          "https://github-readme-stats.vercel.app/api/pin/?username=neeraj-22&repo=newsapp"
                        }
                        alt="newsapp"
                      />
                    </a>

                    <p className="mb-4">Click to View in Github</p>
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      <i className="fas fa-xmark fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio Modal 2--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal2"
        tabIndex="-1"
        aria-labelledby="portfolioModal2"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Login Verification
                    </h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom"></div>

                    {/* <!-- Portfolio Modal - Image--> */}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/neeraj-22/login-verification"
                    >
                      <img
                        src={
                          "https://github-readme-stats.vercel.app/api/pin/?username=neeraj-22&repo=login-verification"
                        }
                        alt="login-verification"
                      />
                    </a>
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p className="mb-4">Click to Viewin GitHub</p>
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      <i className="fas fa-xmark fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio Modal 3--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal3"
        tabIndex="-1"
        aria-labelledby="portfolioModal3"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      TeeCom
                    </h2>

                    <div className="divider-custom"></div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/neeraj-22/TeeCom"
                    >
                      <img
                        src={
                          "https://github-readme-stats.vercel.app/api/pin/?username=neeraj-22&repo=TeeCom"
                        }
                        alt="TeeCom"
                      />
                    </a>
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p className="mb-4">Click to View in GitHub</p>
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      <i className="fas fa-xmark fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PortfolioComponent;
