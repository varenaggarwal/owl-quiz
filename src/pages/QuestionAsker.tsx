import { Button } from "@chakra-ui/button";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import { tennisQuiz } from "../data/tennisQuiz";
import { useParams } from "react-router-dom";

export function QuestionAsker() {
  const { questionNumber } = useParams();

  const getQuestion = (questions, questionNumber) => {
    return questions.find((question) => question.id === questionNumber);
  };
  const currentQuestion = getQuestion(tennisQuiz.questions, questionNumber);

  return (
    <div>
      <Box>{currentQuestion.question}</Box>
      <SimpleGrid columns={2} spacing="1rem">
        {currentQuestion.options.map((currentOption) => (
          <Button colorScheme="green">{currentOption.text}</Button>
        ))}
      </SimpleGrid>
    </div>
  );
}
