import { Progress } from "@chakra-ui/progress";
import { useQuizState } from "../contexts/quizStateContext";

export function Header() {
  const { state, dispatch } = useQuizState();
  return (
    <div>
      <Progress value={(state.currentQuestion / state.totalQuestions) * 100} />
      <h1>Score : {state.score}</h1>
      <h1>Current Question : {state.currentQuestion}</h1>
    </div>
  );
}
