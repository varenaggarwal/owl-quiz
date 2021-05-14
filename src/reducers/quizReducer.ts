type actionType =
  | { type: "CORRECT_ANSWER" }
  | { type: "WRONG_ANSWER" }
  | { type: "NEXT_QUESTION" };

export const quizReducer = (state: QuizStateType, action: actionType) => {
  switch (action.type) {
    case "CORRECT_ANSWER":
      return state;
    case "WRONG_ANSWER":
      return state;
    case "NEXT_QUESTION":
      if (state.currentQuestion < state.totalQuestions)
        return { ...state, currentQuestion: state.currentQuestion + 1 };
      else {
        return state;
      }

    default:
      console.error("In the default case of the quizReducer");
      return state;
  }
};
