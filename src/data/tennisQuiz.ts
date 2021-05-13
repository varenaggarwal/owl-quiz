const tennisQuiz: Quiz = {
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
          text: "Even Stevens",
          isRight: false,
        },
        {
          text: "Equals",
          isRight: false,
        },
        {
          text: "Draw",
          isRight: false,
        },
        {
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
      negativePoint: 22,
      options: [
        {
          text: "getting trained as master of the mystic arts",
          isRight: false,
        },
        {
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
          text: "Clint",
          isRight: false,
        },
        {
          text: "Vision",
          isRight: true,
        },
      ],
    },
  ],
};

export { tennisQuiz };
