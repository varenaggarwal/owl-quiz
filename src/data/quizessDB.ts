import { Quizzes } from "./quizessDB.type";

const quizzesDB: Quizzes = {
  quizzes: [
    {
      id: 546,
      quizName: "Tennis Knowledge Challenge 🎾",
      playTime: "5 minutes",
      questions: [
        {
          id: 1,
          question: "When the score is 40-40, what is it otherwise called?",
          points: 5,
          negativePoint: 2,
          options: [
            {
              id: 1,
              text: "Even Stevens",
              isRight: false,
            },
            {
              id: 2,
              text: "Equals",
              isRight: false,
            },
            {
              id: 3,
              text: "Draw",
              isRight: false,
            },
            {
              id: 4,
              text: "Deuce",
              isRight: true,
            },
          ],
        },
        {
          id: 2,
          question:
            "What was Dr. Strange doing during the fight of New York in 2012?",
          points: 15,
          negativePoint: 2,
          options: [
            {
              id: 1,
              text: "getting trained as master of the mystic arts",
              isRight: false,
            },
            {
              id: 2,
              text: "performing surgery as a real doctor",
              isRight: true,
            },
          ],
        },
        {
          id: 3,
          question: "who's the love interest for Wanda in MCU?",
          points: 5,
          options: [
            {
              id: 1,
              text: "Clint",
              isRight: false,
            },
            {
              id: 2,
              text: "Vision",
              isRight: true,
            },
          ],
        },
      ],
    },
  ],
};

export { quizzesDB };
