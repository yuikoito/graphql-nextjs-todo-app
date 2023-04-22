/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo($input: TodoInput!) {
    createTodo(input: $input) {
      id
      title
      description
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo($id: ID!, $input: TodoInput!) {
    updateTodo(id: $id, input: $input) {
      id
      title
      description
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;
