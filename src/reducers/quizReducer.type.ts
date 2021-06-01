import { Question, Option } from "../data/quizessDB.type";

type UpdateScorePayload = {
  currentQuestion: Question;
  selectedOption: Option;
};

type StartQuizPayload = {
  totalQuestions: number;
  quizId: number;
};

type SaveOptionsPayload = {
  questionId: number;
  optionId: number;
};

type actionType =
  | { type: "NEXT_QUESTION" }
  | { type: "RESET_QUIZ" }
  | { type: "UPDATE_SCORE"; payload: UpdateScorePayload }
  | { type: "START_QUIZ"; payload: StartQuizPayload }
  | { type: "SAVE_OPTION"; payload: SaveOptionsPayload };

export type {
  UpdateScorePayload,
  StartQuizPayload,
  SaveOptionsPayload,
  actionType,
};
