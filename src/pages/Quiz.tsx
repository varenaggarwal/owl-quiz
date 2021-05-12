import { SimpleGrid } from "@chakra-ui/layout";
import { QuestionAsker } from "../components/QuestionAsker";
import { tennisQuiz } from "../data/tennisQuiz";

export function Quiz() {
  return (
    <div>
      <SimpleGrid>
        <h1>Quiz</h1>
        <h2>{tennisQuiz.quizName}</h2>
        <QuestionAsker currentQuestion = {tennisQuiz.questions[0]}/>
      </SimpleGrid>
    </div>
  );
}
