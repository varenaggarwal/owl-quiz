import { Button } from "@chakra-ui/button";
import { Box, Divider, Flex, SimpleGrid, Text, Link } from "@chakra-ui/layout";
import { tennisQuiz } from "../data/tennisQuiz";
import { Header } from "../components/Header";
import { useQuizState } from "../contexts/quizStateContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heading, Image, useToast } from "@chakra-ui/react";
import { ConfirmationDialog } from "../components/ConfirmationDialog";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export function QuestionAsker() {
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const { state, dispatch } = useQuizState();
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

  const toast = useToast();
  const navigate = useNavigate();

  const onCloseAlert = () => setIsAlertOpen(false);

  const getQuestion = (questions: Question[], questionNumber: number) => {
    return questions.find((question) => question.id === questionNumber);
  };

  const currentQuestion = getQuestion(
    tennisQuiz.questions,
    state.currentQuestion
  );

  const handleNextQuestion = () => {
    if (state.currentQuestion < state.totalQuestions) {
      if (isAnswered) {
        setIsAnswered(false);
        setSelectedOption(null);
        dispatch({ type: "NEXT_QUESTION" });
      } else {
        toast({
          title: "Please answer the Question",
          status: "warning",
          isClosable: true,
        });
      }
    } else {
      if (isAnswered) {
        navigate(`/quiz/${state.quizName}/result`);
      } else {
        toast({
          title: "Please answer the Question",
          status: "warning",
          isClosable: true,
        });
      }
    }
  };

  const resetQuiz = () => {
    setIsAlertOpen(true);
  };

  const onResetAlertYes = () => {
    setIsAnswered(false);
    setSelectedOption(null);
    dispatch({ type: "RESET_QUIZ" });
    setIsAlertOpen(false);
  };

  const judgeAnswer = (clickedOption: Option) => {
    // show the answer is right or not right
    if (!isAnswered) {
      const isCorrectAnswer = clickedOption.isRight;
      toast({
        title: isCorrectAnswer ? "Correct answer!" : "Wrong answer!",
        status: isCorrectAnswer ? "success" : "error",
        isClosable: true,
      });
      setIsAnswered(true);
      setSelectedOption(clickedOption);
      // update score
      dispatch({
        type: "UPDATE_SCORE",
        payload: { currentQuestion, selectedOption: clickedOption },
      });
    } else {
      toast({
        title: "Already answered",
        status: "warning",
        isClosable: true,
      });
    }
  };

  const optionStyle = (optionId: number) => {
    if (!isAnswered) {
      return "blue";
    } else {
      if (selectedOption && optionId === selectedOption.id) {
        return selectedOption.isRight ? "green" : "red";
      } else {
        return "blue";
      }
    }
  };

  return (
    <>
      <Header />
      <ConfirmationDialog
        isOpen={isAlertOpen}
        onClose={onCloseAlert}
        onYes={onResetAlertYes}
      />
      <Flex flexDirection="column" justify="center" padding="1rem">
        <Box
          colour="blue"
          borderWidth="2px"
          borderRadius="lg"
          overflow="hidden"
          padding="1rem"
          shadow="base"
        >
          <Heading as="h2" size="lg">
            {currentQuestion?.question}
          </Heading>

          <Text align={"right"} fontStyle="italic">
            Points: {currentQuestion?.points}
          </Text>
          <Divider />
          <Flex flexDirection={"column"}>
            {currentQuestion?.options.map((currentOption) => (
              <Button
                key={currentOption.id}
                onClick={() => judgeAnswer(currentOption)}
                colorScheme={optionStyle(currentOption.id)}
                marginTop="1rem"
              >
                {currentOption.text}
              </Button>
            ))}
          </Flex>
        </Box>

        {/* <SimpleGrid columns={2} spacing="1rem">
          {currentQuestion?.options.map((currentOption) => (
            <Button
              key={currentOption.id}
              onClick={() => judgeAnswer(currentOption)}
              colorScheme={optionStyle(currentOption.id)}
            >
              {currentOption.text}
            </Button>
          ))}
        </SimpleGrid> */}
        <br />
        <Button
          isActive={isAnswered ? true : false}
          onClick={handleNextQuestion}
        >
          {state.currentQuestion < state.totalQuestions
            ? "Next Question"
            : "End Quiz"}
        </Button>
        <Button onClick={resetQuiz}>Reset</Button>
      </Flex>
      <Box p={4} display={{ md: "flex" }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            width={{ md: 40 }}
            src="https://bit.ly/2jYM25F"
            alt="Woman paying for a purchase"
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            Points: {currentQuestion?.points}
          </Text>
          {/* <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            Finding customers for your new business
          </Link> */}
          <Heading as="h2" size="lg">
            {currentQuestion?.question}
          </Heading>
          {/* <Text mt={2} color="gray.500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </Text> */}
          {currentQuestion?.options.map((currentOption) => (
            <Button
              key={currentOption.id}
              onClick={() => judgeAnswer(currentOption)}
              colorScheme={optionStyle(currentOption.id)}
              marginTop="1rem"
            >
              {currentOption.text}
            </Button>
          ))}
        </Box>
      </Box>
    </>
  );
}
