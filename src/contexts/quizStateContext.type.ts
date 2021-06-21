type QuizStatus = "READY_TO_START" | "IN_PROGRESS" | "ENDED";

type SelectedOptions = {
  questionId: number;
  selectedOptionId: number;
};

type QuizStateType = {
  quizId: number | null;
  score: number;
  currentQuestion: number;
  totalQuestions: number;
  status: any;
  selectedOption: any;
};

type QuizStateContext = {
  state: QuizStateType;
  dispatch: any;
};

export type { QuizStateContext, QuizStatus, QuizStateType };
