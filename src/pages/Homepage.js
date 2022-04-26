import React, { Fragment } from "react";
import ResumeComponent from "../components/ResumeComponent";
import Footer from "../components/CommonComponents/Footer";
import Header from "../components/CommonComponents/Header";
import Hero from "../components/CommonComponents/Hero";
import PortfolioComponent from "../components/PortfolioComponent";
import SkillsComponent from "../components/SkillsComponent";

const Homepage = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <PortfolioComponent/>
      <ResumeComponent/>
      <SkillsComponent/>      
      <Footer/>
    </Fragment>
  );
};

export default Homepage;
