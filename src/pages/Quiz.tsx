import { SimpleGrid } from "@chakra-ui/layout";
import { QuestionAsker } from "./QuestionAsker";
import { tennisQuiz } from "../data/tennisQuiz";
import { useQuizState } from "../contexts/quizStateContext";
import { Header } from "../components/Header";
import { Button } from "@chakra-ui/button";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export function Quiz() {
  const { state, dispatch } = useQuizState();
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate(`/quiz/${state.currentQuestion}`);
  };

  return (
    <div>
      <Header />
      <SimpleGrid>
        <h1>I want to learn...</h1>
        <Button colorScheme="blue" onClick={startQuiz}>
          <span>{tennisQuiz.quizName}</span>
          <span>
            <ArrowRightIcon />
          </span>
        </Button>
      </SimpleGrid>
    </div>
  );
}
