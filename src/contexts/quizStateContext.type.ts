type QuizStatus = "READY_TO_START" | "IN_PROGRESS" | "ENDED";

type SelectedOptions = {
  questionId: number;
  selectedOptionId: number;
};

type QuizStateType = {
  score: number;
  currentQuestion: number;
  totalQuestions: number;
  status: any;
  quizName: string | null;
  selectedOption: any;
};

type QuizStateContext = {
  state: QuizStateType;
  dispatch: any;
};

export type { QuizStateContext, QuizStatus, QuizStateType };
