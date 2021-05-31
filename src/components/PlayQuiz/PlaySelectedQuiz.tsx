import { useParams } from "react-router";
import { QuestionAsker } from "./QuestionAsker";
import { quizzesDB } from "../../data/quizessDB";
import { Quizzes } from "../../data/quizessDB.type";

export function PlaySelectedQuiz() {
  const { quizId } = useParams();

  const getQuiz = (quizzesDB: Quizzes, quizId: number) => {
    return quizzesDB.quizzes.find((quiz) => quiz.id === quizId);
  };

  const selectedQuiz = getQuiz(quizzesDB, parseInt(quizId));

  /// set up State in progress totalQuestions and currentQuestion

  return (
    <>
      {/* {console.log({ selectedQuiz })} */}
      <QuestionAsker selectedQuiz={selectedQuiz} />
    </>
  );
}
