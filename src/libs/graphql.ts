import { API, graphqlOperation } from "aws-amplify";
import { allTodos, singleTodo } from "@/src/graphql/queries";
import { createTodo, deleteTodo, updateTodo } from "@/src/graphql/mutations";
import {
  AllTodosQuery,
  CreateTodoMutation,
  DeleteTodoMutation,
  SingleTodoQuery,
  Todo,
  TodoInput,
  UpdateTodoMutation,
} from "@/src/API";

export const getAllTodos = async () => {
  const response = (await API.graphql(graphqlOperation(allTodos))) as {
    data: AllTodosQuery;
  };
  return response.data.allTodos as Todo[];
};
export const getTodoById = async (id: string) => {
  const response = (await API.graphql(
    graphqlOperation(singleTodo, { id })
  )) as { data: SingleTodoQuery };
  return response.data.singleTodo as Todo;
};

export const createTodoHandler = async (input: TodoInput) => {
  const response = (await API.graphql(
    graphqlOperation(createTodo, { input })
  )) as { data: CreateTodoMutation };
  return response.data.createTodo as Todo;
};
export const updateTodoHandler = async (id: string, input: TodoInput) => {
  const response = (await API.graphql(
    graphqlOperation(updateTodo, { id, input })
  )) as { data: UpdateTodoMutation };
  console.log(response);
  return response.data.updateTodo as Todo;
};
export const deleteTodoHandler = async (id: string) => {
  const response = (await API.graphql(
    graphqlOperation(deleteTodo, { id })
  )) as { data: DeleteTodoMutation };
  return response.data.deleteTodo as boolean;
};
