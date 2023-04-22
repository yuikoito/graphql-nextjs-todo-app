import { useEffect, useState } from "react";
import { getAllTodos } from "@/src/libs/graphql";
import { Todo } from "@/src/API";
import { Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { NoTodo } from "@/src/components/NoTodo";
import { AddTodo } from "@/src/components/AddTodo";
import { Header } from "@/src/components/Header";
import { TodoList } from "@/src/components/TodoList";
import React from "react";
import { Loading } from "@/src/components/Loading";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      const res = await getAllTodos();
      setTodos(res);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Box>
      <Header />
      <Container py={4}>
        <Box>
          {todos.map((todo: Todo) => (
            <React.Fragment key={todo.id}>
              <TodoList
                todo={todo}
                setTodos={setTodos}
                setIsLoading={setIsLoading}
              />
            </React.Fragment>
          ))}
          {todos.length === 0 && !isLoading && <NoTodo />}
        </Box>
      </Container>
      <AddTodo setTodos={setTodos} setIsLoading={setIsLoading} />
      <Loading isLoading={isLoading} />
    </Box>
  );
}
