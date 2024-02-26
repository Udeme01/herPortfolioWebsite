import About from "./components/About";
import { Header } from "./components/Header";
import Home from "./components/HomePage";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
    </Fragment>
  );
}

export default App;
