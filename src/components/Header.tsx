import { Progress } from "@chakra-ui/progress";
import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useQuizState } from "../contexts/quizStateContext";
import { Heading } from "@chakra-ui/react";

export function Header() {
  const { state, dispatch } = useQuizState();
  return (
    <div>
      <Progress value={(state.currentQuestion / state.totalQuestions) * 100} />
      <SimpleGrid columns={2}>
        <Heading as="h3" size="md">
          Question : {state.currentQuestion} of {state.totalQuestions}
        </Heading>
        <Heading as="h3" size="md">
          Score : {state.score}
        </Heading>
        {/* <Text fontSize="md">Question : {state.currentQuestion}</Text> */}
      </SimpleGrid>
    </div>
  );
}
