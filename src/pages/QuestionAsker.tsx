import { Button } from "@chakra-ui/button";
import { Box, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { tennisQuiz } from "../data/tennisQuiz";
import { Header } from "../components/Header";
import { useQuizState } from "../contexts/quizStateContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heading, useToast } from "@chakra-ui/react";
import { ConfirmationDialog } from "../components/ConfirmationDialog";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export function QuestionAsker() {
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const { state, dispatch } = useQuizState();
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

  const toast = useToast();
  const navigate = useNavigate();

  const toastIdPleaseAns = "toastIdPleaseAns";
  const toaseIdAlreadyAnswered = "toaseIdAlreadyAnswered";
  // const toastPleaseAnsId = "toastPleaseAns"

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
        toast.closeAll();
        if (!toast.isActive(toastIdPleaseAns)) {
          toast({
            id: toastIdPleaseAns,
            title: "Please answer the Question",
            status: "warning",
            isClosable: true
          });
        }
      }
    } else {
      if (isAnswered) {
        navigate(`/quiz/${state.quizName}/result`);
      } else {
        if (!toast.isActive(toastIdPleaseAns)) {
          toast.closeAll();
          toast({
            id: toastIdPleaseAns,
            title: "Please answer the Question",
            status: "warning",
            isClosable: true
          });
        }
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
      toast.closeAll();
      toast({
        title: isCorrectAnswer ? "Correct answer!" : "Wrong answer!",
        status: isCorrectAnswer ? "success" : "error",
        isClosable: true
      });
      setIsAnswered(true);
      setSelectedOption(clickedOption);
      // update score
      dispatch({
        type: "UPDATE_SCORE",
        payload: { currentQuestion, selectedOption: clickedOption }
      });
    } else {
      if (!toast.isActive(toaseIdAlreadyAnswered)) {
        toast.closeAll();
        toast({
          id: toaseIdAlreadyAnswered,
          title: "Already answered",
          status: "warning",
          isClosable: true
        });
      }
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
    </>
  );
}
