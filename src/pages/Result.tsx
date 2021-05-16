import { Button } from "@chakra-ui/button";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuizState } from "../contexts/quizStateContext";
import { tennisQuiz } from "../data/tennisQuiz";

export function Result() {
  const { state, dispatch } = useQuizState();
  const totalScore = 100;
  const resultScorePercentage = Math.ceil((state.score / totalScore) * 100);
  const navigate = useNavigate();
  const quizName = tennisQuiz.quizName;

  const resetQuiz = () => {
    dispatch({ type: "RESET_QUIZ" });
    navigate(`/quiz/${quizName}`);
  };
  const exitQuiz = () => {
    navigate(`/`);
  };

  return (
    <div>
      <h1>Result</h1>
      <CircularProgress value={resultScorePercentage} size="120px">
        <CircularProgressLabel>{resultScorePercentage}%</CircularProgressLabel>
      </CircularProgress>
      <Button onClick={resetQuiz}>Play Again</Button>
      <Button onClick={exitQuiz}>Home</Button>
    </div>
  );
}
