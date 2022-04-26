import React, { Fragment } from "react";
import resume from "../assets/Neeraj Gandhi_Resume.pdf"

const ResumeComponent = () => {

  return (
    
    <Fragment>
      <section className="page-section bg-primary text-white mb-0" id="resume">
        <div className="container">
          {/* Resume Section Heading */}
          <h2 className="page-section-heading text-center text-uppercase text-white">
            Resume
          </h2>

          {/*  Resume Section Content */}
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                I am a pre-final year student, pursuing engineering in electronics 
                and telecommunications.
                <br/>
                I have been into web development for more than a year and gained 
                <b> proficiency in JavaScript, MERN stack, Redux</b> and more.
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">
                Besides web development, startups, WEB3 and blockchain 
                technology is what excites me the most. 
                <br/>
                I'm actively seeking web dev internships as I aspire to leverage 
                my skills and make a meaningful contribution to the company I join.
       
              </p>
            </div>
          </div>
          
          {/* Download Resume Button*/}
          <div className="text-center mt-4">
            <a
              className="btn btn-xl btn-outline-light"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              download="Resume_NeerajGandhi.pdf"
            >
              <i className="fas fa-download me-2"></i>
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ResumeComponent;
