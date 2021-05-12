import { Button, ButtonGroup } from "@chakra-ui/react"
import { Link } from "react-router-dom";

export function Homepage() {
    return (
    <div>
        <h1>HomePage</h1>
        <h1>Learn the champions of Tennis</h1>
        <Link to="/quiz">
            <Button colorScheme="green">Start Quiz</Button>
        </Link>
    </div>
    );
}