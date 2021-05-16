import { Progress } from "@chakra-ui/progress";
import { Flex, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { useQuizState } from "../contexts/quizStateContext";
import { Heading } from "@chakra-ui/react";

export function Header() {
  const { state, dispatch } = useQuizState();
  return (
    <div>
      <Flex flexDirection="column">
        <Progress
          value={(state.currentQuestion / state.totalQuestions) * 100}
        />
        <Flex
          justifyContent={"space-between"}
          paddingTop="1rem"
          paddingLeft="1rem"
          paddingRight="1rem"
        >
          <Heading as="h3" size="md">
            Question : {state.currentQuestion} of {state.totalQuestions}
          </Heading>
          <Heading size="md">Total Score : {state.score}</Heading>
        </Flex>
      </Flex>
    </div>
  );
}
