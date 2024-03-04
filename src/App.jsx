import { Fragment } from "react";
import About from "./components/About/About";
import { Header } from "./components/Header/Header";
import Home from "./components/HomePage";
import ServiceHeader from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// import Modal from "./components/Modal/Modal";

// import { useState, useRef, useEffect } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      {/* <Modal /> */}
      <About />
      <ServiceHeader />
      <Blog />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
