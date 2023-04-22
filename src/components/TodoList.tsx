import { deleteTodoHandler, updateTodoHandler } from "@/src/libs/graphql";
import { Todo, TodoInput } from "@/src/API";
import { Box, Text, Flex, useDisclosure, useToast } from "@chakra-ui/react";
import { TodoModal } from "./TodoModal";
import { useState } from "react";
import { DeleteTodo } from "./DeleteTodo";

type Props = {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
export const TodoList: React.FC<Props> = ({ todo, setTodos, setIsLoading }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [input, setInput] = useState<TodoInput>({
    title: todo.title,
    description: todo.description,
  });

  const onEditTodo = async () => {
    try {
      setIsLoading(true);
      const res = await updateTodoHandler(todo.id, input);
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? res : t)));
      onClose();
      setIsLoading(false);
    } catch {
      toast({
        title: "エラーが発生しました",
        description: "タスクの更新ができませんでした",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const onDeleteTodo = async () => {
    try {
      setIsLoading(true);
      await deleteTodoHandler(todo.id);
      setTodos((prev) => prev.filter((t) => t.id !== todo.id));
      setIsLoading(false);
    } catch {
      toast({
        title: "エラーが発生しました",
        description: "タスクの削除ができませんでした",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      borderRadius={"md"}
      boxShadow={"md"}
      gap={4}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      cursor={"pointer"}
      onClick={onOpen}
    >
      <Flex gap={4} p={2}>
        <Box>
          <Text fontWeight={"bold"} color="gray.700">
            {todo.title}
          </Text>
          <Text color="gray.700">{todo.description}</Text>
        </Box>
      </Flex>
      <DeleteTodo onDeleteTodo={onDeleteTodo} />
      <TodoModal
        isOpen={isOpen}
        onClose={onClose}
        input={input}
        setInput={setInput}
        headerTitle={"タスクの更新"}
        buttonText={"タスクの更新をする"}
        onButtonClick={onEditTodo}
      />
    </Flex>
  );
};
