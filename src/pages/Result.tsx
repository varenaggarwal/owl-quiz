import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";
import { useQuizState } from "../contexts/quizStateContext";
import { tennisQuiz } from "../data/tennisQuiz";

export function Result() {
  const { state } = useQuizState();
  const totalScore = 100;
  const resultScorePercentage = (state.score / totalScore) * 100;
  return (
    <div>
      <h1>Result</h1>
      <CircularProgress value={resultScorePercentage} size="120px">
        <CircularProgressLabel>{resultScorePercentage}%</CircularProgressLabel>
      </CircularProgress>
    </div>
  );
}
