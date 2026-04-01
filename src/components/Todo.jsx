import React from // { useEffect, useState }

"react";
import { useFetch } from "../hooks/useFetch";

const Todo = () => {
  // const [todos, setTodos] = useState([]);
  // const [loading, setLoading] = useState(true);

  const {
    data: todos,
    loading,
    // error,
  } = useFetch("https://jsonplaceholder.typicode.com/todos");

  // async function fetchData() {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos",
  //     );
  //     const data = await response.json();
  //     setTodos(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  //   useEffect(1);

  // useEffect(() => {
  //   // fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
  //   //   res.json().then((data) => {
  //   //     console.log(data);
  //   //   }),
  //   // );

  //   fetchData();
  // }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Todo List</h1>

      <div>
        {todos.map((todo) => {
          console.log(todo);
          return (
            <div
              className=""
              style={{
                borderBottom: "solid 1px red",
              }}
              key={todo.id}
            >
              <p>ID - {todo.id}</p>
              <p>Title - {todo.title}</p>
              <p>Completed - {todo.completed ? "Yes" : "No"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
