import React, { Fragment } from "react";

const SkillsComponent = () => {
  return (
    <Fragment>
      <section className="page-section skills-wrapper" id="skills">
        <div className="container">
          <div className="skill-div-center">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Skills
          </h2>
            <div className="Skill-box">
              <p>HTML 5</p>
              <p> 90%</p>
              <div className="skill">
                <div className="skill-level" style={{width: "90%"}}></div>
              </div>
            </div>
            <div className="Skill-box">
              <p>CSS 3</p>
              <p> 85%</p>
              <div className="skill">
                <div className="skill-level" style={{width: "85%"}}></div>
              </div>
            </div>
            <div className="Skill-box">
              <p>Javascript</p>
              <p> 85%</p>
              <div className="skill">
                <div className="skill-level" style={{width: "85%"}}></div>
              </div>
            </div>
            <div className="Skill-box">
              <p>jQuery</p>
              <p> 65%</p>
              <div className="skill">
                <div className="skill-level" style={{width: "65%"}}></div>
              </div>
            </div>
            <div className="Skill-box">
              <p>MERN Stack</p>
              <p> 80%</p>
              <div className="skill">
                <div className="skill-level" style={{width: "80%"}}></div>
              </div>
            </div>
            <div className="Skill-box">
              <p>Redux</p>
              <p> 65%</p>
              <div className="skill">
                <div className="skill-level" style={{width: "65%"}}></div>
              </div>
            </div>
            <div className="Skill-box">
              <p>C++</p>
              <p> 75%</p>
              <div className="skill">
                <div className="skill-level" style={{width: "75%"}}></div>
              </div>
            </div>
            <div className="Skill-box">
              <p>OOP</p>
              <p> 50%</p>
              <div className="skill">
                <div className="skill-level" style={{width: "50%"}}></div>
              </div>
            </div>
            <div className="Skill-box">
              <p>Blockchain Architecture</p>
              <p> 85%</p>
              <div className="skill">
                <div className="skill-level" style={{width: "85%"}}></div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </Fragment>
  );
};

export default SkillsComponent;
