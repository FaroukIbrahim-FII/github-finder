import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import DetailedUser from "./components/DetailedUser";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
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
