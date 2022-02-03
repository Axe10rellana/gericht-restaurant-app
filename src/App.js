//importaciones
import React from "react";

//containers
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";

//componentes
import { Navbar, BtnScroll } from "./components";

//estilos
import "./styles/App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <BtnScroll />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
