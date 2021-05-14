import { Button } from "@chakra-ui/button";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import { tennisQuiz } from "../data/tennisQuiz";
import { Header } from "../components/Header";
import { useQuizState } from "../contexts/quizStateContext";
import { useState } from "react";

export function QuestionAsker() {
  const [isAnswered, setIsAnswered] = useState<Boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const { state, dispatch } = useQuizState();

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
      setIsAnswered(false);
      setSelectedOption(null);
      dispatch({ type: "NEXT_QUESTION" });
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
      <Box>
        {currentQuestion.question}
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
      <Button onClick={handleNextQuestion}>Next question</Button>
    </div>
  );
}
