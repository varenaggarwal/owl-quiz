import "./App.css";
import { Homepage } from "./components/Homepage";
import { SelectQuiz } from "./components/SelectQuiz";
import { Route, Routes } from "react-router-dom";
import { QuestionAsker } from "./components/PlayQuiz/QuestionAsker";
import { Result } from "./components/Result";
import Navbar from "./components/NavBar";
import { Footer } from "./components/Footer";
import { PlaySelectedQuiz } from "./components/PlayQuiz/PlaySelectedQuiz";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/quiz" element={<SelectQuiz />} />
          <Route path="/quiz/:quizId" element={<PlaySelectedQuiz />} />
          <Route path="//quiz/:quizId/result" element={<Result />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
