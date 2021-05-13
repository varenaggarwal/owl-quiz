import { createContext, useReducer, useContext } from "react";
import { quizReducer } from "../reducers/quizReducer";
import { tennisQuiz } from "../data/tennisQuiz";

const initialState: QuizStateType = {
  score: 0,
  currentQuestion: 1,
  totalQuestions: tennisQuiz.questions.length,
  status: "READY_TO_START",
};

type Context = {
  state: QuizStateType;
  dispatch: any;
};

const QuizState = createContext<Context | null>(null);

function QuizStateProvider({ children }: any) {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizState.Provider value={{ state, dispatch }}>
      {children}
    </QuizState.Provider>
  );
}

function useQuizState() {
  return useContext(QuizState);
}

export { QuizStateProvider, useQuizState, QuizState };
