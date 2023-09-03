import React from "react";
// import About from "./About";
import Hero from "./components/sections/Hero"
// import Shop from "./Shop";
import Nav from "./components/Header";
import Home from "./components/views/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/sections/About";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" component={Home} />
          {/* <Route path="/shop" component={Shop} /> */}
        </Routes>

        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about-me" element={<About/>} />
        <Route path="*" element={<Error/>} />

      </Routes>
      </div>
    </Router>
  );
}

