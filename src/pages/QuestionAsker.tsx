import { Button } from "@chakra-ui/button";
import { Box, SimpleGrid, Text } from "@chakra-ui/layout";
import { tennisQuiz } from "../data/tennisQuiz";
import { Header } from "../components/Header";
import { useQuizState } from "../contexts/quizStateContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heading, useToast } from "@chakra-ui/react";
import { ConfirmationDialog } from "../components/ConfirmationDialog";

export function QuestionAsker() {
  const [isAnswered, setIsAnswered] = useState<Boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const { state, dispatch } = useQuizState();
  const toast = useToast();
  const navigate = useNavigate();

  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
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
      navigate(`/quiz/${state.quizName}/result`);
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
    <div>
      <Header />
      <ConfirmationDialog
        isOpen={isAlertOpen}
        onClose={onCloseAlert}
        onYes={onResetAlertYes}
      />
      <Box colour="blue" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Heading as="h2" size="lg">
          {currentQuestion?.question}
        </Heading>
        <Text>Points: {currentQuestion?.points}</Text>
      </Box>

      <SimpleGrid columns={2} spacing="1rem">
        {currentQuestion?.options.map((currentOption) => (
          <Button
            key={currentOption.id}
            onClick={() => judgeAnswer(currentOption)}
            colorScheme={optionStyle(currentOption.id)}
          >
            {currentOption.text}
          </Button>
        ))}
      </SimpleGrid>
      <br />
      <Button onClick={resetQuiz}>Reset</Button>
      <Button onClick={handleNextQuestion}>
        {state.currentQuestion < state.totalQuestions
          ? "Next Question"
          : "End Quiz"}
      </Button>
    </div>
  );
}
