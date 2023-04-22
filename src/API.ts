/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type TodoInput = {
  title: string,
  description?: string | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  title: string,
  description?: string | null,
};

export type CreateTodoMutationVariables = {
  input: TodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    description?: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  id: string,
  input: TodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    description?: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  id: string,
};

export type DeleteTodoMutation = {
  deleteTodo?: boolean | null,
};

export type SingleTodoQueryVariables = {
  id: string,
};

export type SingleTodoQuery = {
  singleTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    description?: string | null,
  } | null,
};

export type AllTodosQuery = {
  allTodos?:  Array< {
    __typename: "Todo",
    id: string,
    title: string,
    description?: string | null,
  } | null > | null,
};
