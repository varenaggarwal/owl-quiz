import "./App.css";
import { Homepage } from "./pages/Homepage";
import { Quiz } from "./pages/Quiz";
// import {BrowserRouter as Router , Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { QuestionAsker } from "./pages/QuestionAsker";
import { Result } from "./pages/Result";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="//quiz/:quizName/result" element={<Result />} />
          <Route path="/quiz/:quizName" element={<QuestionAsker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
