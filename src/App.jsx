import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MyContext } from "./Context/MyContext";
import Home from "./Routes/Home";
import Plans from "./Routes/Plans";
import Motivation from "./Routes/Motivation";
import Diet from "./Routes/Diet";
import Fitness from "./Routes/Fitness";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MyContext.Provider value={{ menuOpen, setMenuOpen }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/motivation" element={<Motivation />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/fitness" element={<Fitness />} />
      </Routes>
    </MyContext.Provider>
  );
};

export default App;
