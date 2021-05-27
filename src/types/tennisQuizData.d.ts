type Option = {
  id: number;
  /**
   * Text to show the player
   */
  text: string;

  /**
   * For the right answer make this true
   */
  isRight: boolean;
};

type Question = {
  id: number;
  question: string;
  points: number;
  options: Option[];
  negativePoint?: number;
};

type Quiz = {
  id: number;
  quizName: string;
  playTime: string;
  questions: Question[];
};
