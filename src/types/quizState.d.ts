type QuizStatus = "READY_TO_START" | "IN_PROGRESS" | "ENDED" | null;

type QuizStateType = {
  score: number;
  currentQuestion: number;
  totalQuestions: number;
  status: any;
  quizName: string | null;
};
