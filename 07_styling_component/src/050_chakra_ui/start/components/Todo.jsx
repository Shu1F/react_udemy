import { useState } from "react";
import List from "./List";
import Form from "./Form";
import { Heading, VStack } from "@chakra-ui/react";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, setTodos] = useState(todosList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <VStack>
      <Heading color="blue.200" fontSize="5xl">
        Reminder
      </Heading>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
    </VStack>
  );
};
export default Todo;
