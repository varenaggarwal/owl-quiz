import { Button } from "@chakra-ui/button";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { quizzesDB } from "../../data/quizessDB";
import { useQuizState } from "../../contexts/quizStateContext";

export function SelectQuiz() {
  const navigate = useNavigate();
  const { state, dispatch } = useQuizState();
  // setup Quiz
  const startQuiz = (quizId: number, totalQuestions: number) => {
    navigate(`/quiz/${quizId}`);
    dispatch({ type: "START_QUIZ", payload: { quizId, totalQuestions } });
  };

  return (
    <div className="container">
      {quizzesDB.quizzes.map((quiz) => (
        <Button
          rightIcon={<ArrowRightIcon />}
          colorScheme="blue"
          onClick={() => startQuiz(quiz.id, quiz.questions.length)}
        >
          {quiz.quizName}
        </Button>
      ))}
    </div>
  );
}
