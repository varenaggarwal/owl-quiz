import { Progress } from "@chakra-ui/progress";
import { useQuizState } from "../contexts/quizStateContext";

export function Header() {
  const { state, dispatch } = useQuizState();
  return (
    <div>
      <Progress value={state.currentQuestion / state.totalQuestions} />
    </div>
  );
}
