import { createContext, useReducer, useContext } from "react";
import { quizReducer } from "../reducers/quizReducer";

const initialState: QuizStateType = {
  quizName: null,
  totalQuestions: 0,
  status: "READY_TO_START",
  currentQuestion: 1,
  score: 0,
};

// type Context = {
//   state: QuizStateType;
//   dispatch: any;
// };

const QuizState = createContext(null);

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
