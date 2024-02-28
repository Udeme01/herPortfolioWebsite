import { Fragment } from "react";
import About from "./components/About/About";
import { Header } from "./components/Header/Header";
import Home from "./components/HomePage";
import ServiceHeader from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
      <ServiceHeader />
      <Blog />
      <Contact />
    </Fragment>
  );
}

export default App;
