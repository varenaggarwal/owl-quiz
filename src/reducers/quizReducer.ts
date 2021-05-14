export const quizReducer = (state: QuizStateType, action: actionType) => {
  switch (action.type) {
    case "NEXT_QUESTION":
      if (state.currentQuestion < state.totalQuestions)
        return { ...state, currentQuestion: state.currentQuestion + 1 };
      else {
        return state;
      }
    case "RESET_QUIZ":
      return { ...state, currentQuestion: 1, score: 0 };

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

    default:
      console.error("In the default case of the quizReducer");
      return state;
  }
};
