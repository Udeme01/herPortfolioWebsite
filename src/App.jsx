import { Fragment } from "react";
import About from "./components/About/About";
import { Header } from "./components/Header/Header";
import Home from "./components/HomePage";
import ServiceHeader from "./components/Services/Services";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
      <ServiceHeader />
      <Blog />
    </Fragment>
  );
}

export default App;
