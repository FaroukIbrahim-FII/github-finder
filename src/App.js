import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import DetailedUser from "./components/DetailedUser";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import NotFound from "./components/NotFound";

import ReactGA from "react-ga";
import { useEffect } from "react";
const TRACKING_ID = "UA-224290684-2"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/user/:id" element={<DetailedUser />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
