import { QuizStateType } from "../contexts/quizStateContext.type";
import { actionType } from "./quizReducer.type";

export const quizReducer = (state: QuizStateType, action: actionType) => {
  switch (action.type) {
    case "NEXT_QUESTION":
      if (state.currentQuestion < state.totalQuestions)
        return { ...state, currentQuestion: state.currentQuestion + 1 };
      else {
        return state;
      }
    case "RESET_QUIZ":
      return {
        ...state,
        status: "READY_TO_START",
        currentQuestion: 0,
        score: 0,
        selectedOption: [],
        quizId: null,
      };

    case "UPDATE_SCORE":
      const negativePoint = action.payload.currentQuestion.negativePoint
        ? action.payload.currentQuestion.negativePoint
        : 0;
      return action.payload.selectedOption.isRight
        ? {
            ...state,
            score: state.score + action.payload.currentQuestion.points,
          }
        : {
            ...state,
            score: state.score - negativePoint,
          };
    case "START_QUIZ":
      return {
        ...state,
        status: "IN_PROGRESS",
        currentQuestion: 1,
        score: 0,
        totalQuestions: action.payload.totalQuestions,
        quizId: action.payload.quizId,
        selectedOption: [],
      };
    case "SAVE_OPTION":
      return {
        ...state,
        selectedOption: [
          ...state.selectedOption,
          {
            questionId: action.payload.questionId,
            optionId: action.payload.optionId,
          },
        ],
      };
    case "END_QUIZ":
      return {
        ...state,
        status: "ENDED",
      };
    default:
      console.error("In the default case of the quizReducer");
      return state;
  }
};
