import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { TodoInput } from "../API";
import { Dispatch, SetStateAction } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  input: TodoInput;
  setInput: Dispatch<SetStateAction<TodoInput>>;
  headerTitle: string;
  buttonText: string;
  onButtonClick: () => void;
};
export const TodoModal: React.FC<Props> = ({
  isOpen,
  onClose,
  input,
  setInput,
  headerTitle,
  buttonText,
  onButtonClick,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{headerTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            variant="unstyled"
            placeholder="タイトル"
            value={input.title}
            onChange={(e) => setInput({ ...input, title: e.target.value })}
          />
          <Input
            variant="unstyled"
            placeholder="説明"
            value={input?.description ?? ""}
            onChange={(e) =>
              setInput({ ...input, description: e.target.value })
            }
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" w={"full"} onClick={onButtonClick}>
            {buttonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
