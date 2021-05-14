import { Button } from "@chakra-ui/button";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import { tennisQuiz } from "../data/tennisQuiz";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { useQuizState } from "../contexts/quizStateContext";

export function QuestionAsker() {
  const { questionNumber } = useParams();
  const { state, dispatch } = useQuizState();
  const navigate = useNavigate();

  const getQuestion = (questions: Question[], questionNumber) => {
    return questions.find(
      (question) => question.id === parseInt(questionNumber)
    );
  };

  const currentQuestion = getQuestion(tennisQuiz.questions, questionNumber);

  const handleNextQuestion = () => {
    if (state.currentQuestion < state.totalQuestions) {
      dispatch({ type: "NEXT_QUESTION" });
      navigate(`/quiz/${state.currentQuestion + 1}`);
    }
  };

  return (
    <div>
      <Header />
      {console.log({ currentQuestion, questionNumber })}
      <h1>Hello</h1>
      <Box>{currentQuestion.question}</Box>
      <SimpleGrid columns={2} spacing="1rem">
        {currentQuestion.options.map((currentOption) => (
          <Button colorScheme="green">{currentOption.text}</Button>
        ))}
      </SimpleGrid>
      <Button onClick={handleNextQuestion}>Next question</Button>
    </div>
  );
}
