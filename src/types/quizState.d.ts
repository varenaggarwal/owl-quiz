type QuizStatus = "READY_TO_START" | "INPROGRESS" | "ENDED";

type QuizStateType = {
  score: number;
  currentQuestion: number;
  totalQuestions: number;
  status: QuizStatus;
};
