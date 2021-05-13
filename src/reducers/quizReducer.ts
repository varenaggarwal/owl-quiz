type actionType = { type: "CORRECT_ANSWER" } | { type: "WRONG_ANSWER" };

export const quizReducer = (state: any, action: actionType) => {
  switch (action.type) {
    case "CORRECT_ANSWER":
      return state;
    case "WRONG_ANSWER":
      return state;
    default:
      console.error("In the default case of the quizReducer");
      return state;
  }
};
