import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";
import { useNavigate } from "react-router-dom";
import { useQuizState } from "../contexts/quizStateContext";
import { useParams } from "react-router-dom";
import { Quizzes } from "../data/quizessDB.type";
import { quizzesDB } from "../data/quizessDB";
import { Box, Divider, Flex, Text } from "@chakra-ui/layout";

export function Result() {
  const { state, dispatch } = useQuizState();
  const { quizId } = useParams();
  const navigate = useNavigate();

  const getQuiz = (quizzesDB: Quizzes, quizId: number) => {
    return quizzesDB.quizzes.find((quiz) => quiz.id === quizId);
  };
  const selectedQuiz = getQuiz(quizzesDB, parseInt(quizId));

  const maxScore = 100;
  const resultScorePercentage = Math.max(
    0,
    Math.ceil((state.score / maxScore) * 100)
  );

  // const quizName = tennisQuiz.quizName;

  const resetQuiz = () => {
    dispatch({ type: "RESET_QUIZ" });
  };

  const exitQuiz = () => {
    navigate(`/`);
  };

  return (
    <div>
      <Heading as={"h1"}>Result</Heading>
      <CircularProgress value={resultScorePercentage} size="120px">
        <CircularProgressLabel>{resultScorePercentage}%</CircularProgressLabel>
      </CircularProgress>
      <Button onClick={resetQuiz}>Play Again</Button>
      <Button onClick={exitQuiz}>Home</Button>
      {selectedQuiz?.questions.map((question) => (
        <Box
          colour="blue"
          borderWidth="2px"
          borderRadius="lg"
          overflow="hidden"
          padding="1rem"
          shadow="base"
        >
          <Heading as="h2" size="lg">
            {question.question}
          </Heading>

          <Text align={"right"} fontStyle="italic">
            Points: {question.points}
          </Text>
          <Divider />
          <Flex flexDirection={"column"}>
            {question.options.map((currentOption) => (
              <Button key={currentOption.id} marginTop="1rem">
                {currentOption.text}
              </Button>
            ))}
          </Flex>
        </Box>
      ))}
    </div>
  );
}
