import React from "react";
import BackgroundImg from "../../components/backgroundImg/BackgroundImg";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";

const Home = () => {
  return (
    <div>
      <BackgroundImg>
        <NavBar />
        <Header />
      </BackgroundImg>
    </div>
  );
};

export default Home;
