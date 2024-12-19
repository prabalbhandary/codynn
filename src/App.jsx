import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  const [isToken, setIsToken] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={isToken ? <Home /> : <Login />} />
        <Route path="/signup" element={!isToken ? <Signup /> : <Home />} />
        <Route path="/login" element={!isToken ? <Login /> : <Home />} />
      </Routes>
    </div>
  );
};

export default App;
