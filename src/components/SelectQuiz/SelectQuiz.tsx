import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { quizzesDB } from "../../data/quizessDB";
import { useQuizState } from "../../contexts/quizStateContext";
import { Center, Box } from "@chakra-ui/layout";

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
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Text>Choose the Quiz</Text>
          <Stack spacing={6}>
            {quizzesDB.quizzes.map((quiz) => (
              <Button
                rightIcon={<ArrowRightIcon />}
                colorScheme="blue"
                onClick={() => startQuiz(quiz.id, quiz.questions.length)}
              >
                {quiz.quizName}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
