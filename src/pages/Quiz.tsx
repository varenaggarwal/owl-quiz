import { tennisQuiz } from "../data/quizessDB";
import { useQuizState } from "../contexts/quizStateContext";
import { Button } from "@chakra-ui/button";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export function Quiz() {
  const { state } = useQuizState();
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate(`/quiz/${state.quizName}`);
  };

  return (
    <div>
      {/* <Header /> */}
      {/* <SimpleGrid> */}
      <h1>I want to learn...</h1>
      <Button
        rightIcon={<ArrowRightIcon />}
        colorScheme="blue"
        onClick={startQuiz}
      >
        {tennisQuiz.quizName}
      </Button>
      {/* </SimpleGrid> */}
    </div>
  );
}
