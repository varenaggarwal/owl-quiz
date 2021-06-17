import { Button } from "@chakra-ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/modal";
import { useRef } from "react";
import { ConfirmationDialogProps } from "./playQuiz.type";

export function ConfirmationDialog({
  isOpen,
  onClose,
  onYes,
}: ConfirmationDialogProps) {
  const cancelAlertRef = useRef<any>();

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelAlertRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Reset Quiz</AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? You will loose your score!
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelAlertRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme="red" onClick={onYes} ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
