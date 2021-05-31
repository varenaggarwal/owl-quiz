type UpdateScorePayload = {
  currentQuestion: Question;
  selectedOption: Option;
};

type StartQuizPayload = {
  totalQuestions: number;
  quizId: number;
};

type actionType =
  | { type: "NEXT_QUESTION" }
  | { type: "RESET_QUIZ" }
  | { type: "UPDATE_SCORE"; payload: UpdateScorePayload }
  | { type: "START_QUIZ"; payload: StartQuizPayload };
