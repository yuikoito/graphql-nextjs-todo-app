import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onDeleteClick: () => void;
};
export const DeleteConfirmModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onDeleteClick,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Todoの削除</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src="/nodata.svg" alt="No todo" />
          <Text fontSize="3xl" fontWeight="bold" color="gray.700">
            本当に削除しますか？
          </Text>
        </ModalBody>
        <ModalFooter>
          <Flex w={"full"} gap={4}>
            <Button colorScheme="red" w={"full"} onClick={onDeleteClick}>
              はい
            </Button>
            <Button
              colorScheme="red"
              variant="outline"
              w={"full"}
              onClick={onClose}
            >
              いいえ
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
