import { Button } from "@chakra-ui/button";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import { tennisQuiz } from "../data/tennisQuiz";
import { Header } from "../components/Header";
import { useQuizState } from "../contexts/quizStateContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heading, useToast } from "@chakra-ui/react";

export function QuestionAsker() {
  const [isAnswered, setIsAnswered] = useState<Boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const { state, dispatch } = useQuizState();
  const toast = useToast();
  const navigate = useNavigate();

  const getQuestion = (questions: Question[], questionNumber) => {
    return questions.find(
      (question) => question.id === parseInt(questionNumber)
    );
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
    setIsAnswered(false);
    setSelectedOption(null);
    dispatch({ type: "RESET_QUIZ" });
  };

  const judgeAnswer = (clickedOption: Option) => {
    // show the answer is right or not right
    if (!isAnswered) {
      setIsAnswered(true);
      setSelectedOption(clickedOption);
      dispatch({
        type: "UPDATE_SCORE",
        payload: { currentQuestion, selectedOption: clickedOption },
      });
    }
    // update score // calculate the score
  };

  const optionStyle = (optionId) => {
    if (!isAnswered) {
      return "blue";
    } else {
      if (optionId === selectedOption.id) {
        return selectedOption.isRight ? "green" : "red";
      } else {
        return "blue";
      }
    }
  };

  return (
    <div>
      <Header />
      <Box colour="blue" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Heading as="h2" size="lg">
          {currentQuestion.question}
        </Heading>
        <h1>Points: {currentQuestion.points}</h1>
        <h1>
          NegativePoints:
          {currentQuestion.negativePoint ? currentQuestion.negativePoint : 0}
        </h1>
      </Box>

      <SimpleGrid columns={2} spacing="1rem">
        {currentQuestion.options.map((currentOption) => (
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
