type UpdateScorePayload = {
  currentQuestion: Question;
  selectedOption: Option;
};

type actionType =
  | { type: "NEXT_QUESTION" }
  | { type: "RESET_QUIZ" }
  | { type: "UPDATE_SCORE"; payload: UpdateScorePayload };
