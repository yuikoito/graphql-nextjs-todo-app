import { useDisclosure } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { DeleteConfirmModal } from "./DeleteConfirmModal";

type Props = {
  onDeleteTodo: () => Promise<void>;
};
export const DeleteTodo: React.FC<Props> = ({ onDeleteTodo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <DeleteIcon
        w={8}
        h={8}
        backgroundColor={"red.500"}
        color={"white"}
        borderRadius={"full"}
        p={2}
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
        cursor={"pointer"}
      />
      <DeleteConfirmModal
        isOpen={isOpen}
        onClose={onClose}
        onDeleteClick={onDeleteTodo}
      />
    </>
  );
};
