import React from "react";
import Hero from "../../components/hero";
import Pages from "../../components/pages";
import Experience from "../../components/experience";
import Technologies from "../../components/technologies";


const Home = () => {
  return (
    <>
      <Hero />
      <Pages />
      <Experience/>
      <Technologies/>
    </>
  );
};

export default Home;
