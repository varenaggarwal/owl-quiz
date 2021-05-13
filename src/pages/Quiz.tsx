import { SimpleGrid } from "@chakra-ui/layout";
import { QuestionAsker } from "./QuestionAsker";
import { tennisQuiz } from "../data/tennisQuiz";
import { useQuizState } from "../contexts/quizStateContext";
import { Header } from "../components/Header";
import { Button } from "@chakra-ui/button";
import { ArrowRightIcon } from "@chakra-ui/icons";

export function Quiz() {
  const { state, dispatch } = useQuizState();

  return (
    <div>
      <Header />
      <SimpleGrid>
        <h1>Quiz</h1>
        <h2>{tennisQuiz.quizName}</h2>
        {tennisQuiz.questions.map((question) => (
          <div>{/* <QuestionAsker currentQuestion={question} /> */}</div>
        ))}
        <Button colorScheme="blue">
          <span>Next</span>
          <span>
            <ArrowRightIcon />
          </span>
        </Button>
      </SimpleGrid>
    </div>
  );
}
