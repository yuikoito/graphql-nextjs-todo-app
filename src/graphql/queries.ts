/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const singleTodo = /* GraphQL */ `
  query SingleTodo($id: ID!) {
    singleTodo(id: $id) {
      id
      title
      description
    }
  }
`;
export const allTodos = /* GraphQL */ `
  query AllTodos {
    allTodos {
      id
      title
      description
    }
  }
`;
