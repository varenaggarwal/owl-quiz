type QuizStatus = "READY_TO_START" | "IN_PROGRESS" | "ENDED" | null;

type QuizStateType = {
  score: number;
  currentQuestion: number;
  totalQuestions: number;
  status: any;
  quizName: string | null;
};

type QuizStateContext = {
  state: QuizStateType;
  dispatch: (action: actionType) => void;
};

export type { QuizStateContext, QuizStatus, QuizStateType };
