import { createContext, useReducer, useContext } from "react";
import { quizReducer } from "../reducers/quizReducer";
import { QuizStateContext } from "./quizStateContext.type";
import { QuizStateType } from "./quizStateContext.type";

const initialState: QuizStateType = {
  quizName: null,
  totalQuestions: 0,
  status: "READY_TO_START",
  currentQuestion: 1,
  score: 0,
  selectedOption: [],
};

const QuizState = createContext<QuizStateContext>({} as QuizStateContext);

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
