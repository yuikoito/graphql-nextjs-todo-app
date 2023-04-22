import { AddIcon } from "@chakra-ui/icons";
import { Flex, Text, useDisclosure, useToast, Box } from "@chakra-ui/react";
import { useState, Dispatch, SetStateAction } from "react";
import { TodoInput, Todo } from "../API";
import { createTodoHandler } from "../libs/graphql";
import { TodoModal } from "./TodoModal";

type Props = {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
export const AddTodo: React.FC<Props> = ({ setTodos, setIsLoading }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [input, setInput] = useState<TodoInput>({
    title: "",
    description: "",
  });
  const onCreateTodo = async () => {
    try {
      setIsLoading(true);
      const res = await createTodoHandler(input);
      setTodos((prev) => [res, ...prev]);
      onClose();
      setIsLoading(false);
    } catch {
      toast({
        title: "エラーが発生しました",
        description: "タスクの追加ができませんでした",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Box
      position={"fixed"}
      bottom={{ base: 4, lg: 8 }}
      right={{ base: 4, lg: 16 }}
    >
      <Flex
        alignItems={"center"}
        gap={2}
        onClick={() => {
          setInput({ title: "", description: "" });
          onOpen();
        }}
        cursor={"pointer"}
      >
        <AddIcon
          w={{ base: 8, lg: 12 }}
          h={{ base: 8, lg: 12 }}
          backgroundColor={"red.500"}
          color={"white"}
          borderRadius={"full"}
          p={2}
        />
        <Text
          fontSize={{ base: "lg", lg: "3xl" }}
          fontWeight={"bold"}
          color="gray.700"
        >
          タスクを追加
        </Text>
      </Flex>
      <TodoModal
        isOpen={isOpen}
        onClose={onClose}
        input={input}
        setInput={setInput}
        headerTitle={"新しいタスクの追加"}
        buttonText={"タスクを追加する"}
        onButtonClick={onCreateTodo}
      />
    </Box>
  );
};
