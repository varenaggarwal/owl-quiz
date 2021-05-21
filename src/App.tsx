import "./App.css";
import { Homepage } from "./pages/Homepage";
import { Quiz } from "./pages/Quiz";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QuestionAsker } from "./pages/QuestionAsker";
import { Result } from "./pages/Result";
import Navbar from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="//quiz/:quizName/result" element={<Result />} />
        <Route path="/quiz/:quizName" element={<QuestionAsker />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
