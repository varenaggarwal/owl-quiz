import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";
import { useNavigate } from "react-router-dom";
import { useQuizState } from "../contexts/quizStateContext";
import { useParams } from "react-router-dom";
import { Question, Quizzes } from "../data/quizessDB.type";
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

  const resetQuiz = () => {
    dispatch({ type: "RESET_QUIZ" });
  };

  const exitQuiz = () => {
    navigate(`/`);
  };

  const optionStyle = (optionId: number, question: Question) => {
    const isOptionCorrect = (optionId: number, question: Question) => {
      for (let currentOption of question.options) {
        if (currentOption.id === optionId) {
          return currentOption.isRight;
        }
      }
      return false;
    };

    const isSelectedOptionWrong = (optionId: number, question: Question) => {
      for (const currentSelectedOption of state.selectedOption) {
        if (
          currentSelectedOption.questionId === question.id &&
          currentSelectedOption.optionId === optionId
        ) {
          console.log("This is the option I selected, optinId:", optionId);
          return true;
        }
      }
      return false;
    };

    if (isOptionCorrect(optionId, question)) {
      return "green";
    }

    if (isSelectedOptionWrong(optionId, question)) {
      return "red";
    }

    return "gray";
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
              <Button
                colorScheme={optionStyle(currentOption.id, question)}
                key={currentOption.id}
                marginTop="1rem"
              >
                {currentOption.text}
              </Button>
            ))}
          </Flex>
        </Box>
      ))}
    </div>
  );
}
