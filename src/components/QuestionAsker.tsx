import { Button } from "@chakra-ui/button";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import { tennisQuiz } from "../data/tennisQuiz";
import {Question} from "../data/tennisQuiz.type"

type QuestionAskerPropType = {
    currentQuestion : Question
}

export function QuestionAsker({currentQuestion} : QuestionAskerPropType){
    return (
        <div>
            <Box >{currentQuestion.question}</Box>
            <SimpleGrid columns={2} spacing="1rem">
            {currentQuestion.options.map((currentOption) => (
                <Button colorScheme="green">{currentOption.text}</Button>
            ))}
            </SimpleGrid>
        </div>
    )
}