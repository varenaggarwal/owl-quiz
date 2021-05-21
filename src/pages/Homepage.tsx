// import { Button, ButtonGroup } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

// export function Homepage() {
//   return (
//     <div>
//       <h1>HomePage</h1>
//       <h1>Learn the champions of Tennis</h1>
//       <Link to="/quiz">
//         <Button colorScheme="green">Start Quiz</Button>
//       </Link>
//     </div>
//   );
// }

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { tennisQuiz } from "../data/tennisQuiz";

export function Homepage() {
  const navigate = useNavigate();
  const quizName = tennisQuiz.quizName;

  const startQuiz = () => {
    navigate(`/quiz/${quizName}`);
  };

  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Learning{" "}
          <Text as={"span"} color={"blue.400"}>
            made easy
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Are you up for the challenge?
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rightIcon={<ArrowRightIcon />}
            rounded={"full"}
            px={6}
            colorScheme={"blue"}
            bg={"blue.400"}
            _hover={{ bg: "blue.500" }}
            onClick={startQuiz}
            fontSize={"large"}
          >
            {tennisQuiz.quizName}
          </Button>
        </Stack>
        <Flex w={"full"}></Flex>
      </Stack>
    </Container>
  );
}
