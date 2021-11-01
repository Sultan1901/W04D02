import React, { useState } from "react";
import Todoitem from "./components/todoitem";
const App = () => {
  let [todos, setTodos] = useState([
    { id: 1, name: "sleep" },
    { id: 2, name: "code" },
    { id: 3, name: "fffd" },
    { id: 4, name: "rtrt" },
    { id: 5, name: "jkjm" },
  ]);

  const add = (e) => {
    e.preventDefault();
    let inp1 = e.target.input.value;
    setTodos([...todos, { id: todos.length+1, name: inp1 }])
  };
  const remove = (z) => {
    setTodos(todos.filter((item) => item.id !== z));
  };
  const edit = (u) => {
    let inp = prompt('enter new task');
    
    // setTodos(todos.map((item) =>  {return state.name[u] = inp}));
  };
  return (
    <>
      <h1>To-Do-List</h1>
      <form onSubmit = {add}>
<input type = 'text' name = 'input'/><button>Add</button>
      </form><ul>
        {todos.map((item, i) => {
          return <Todoitem item={item} edit={edit} rm={remove} key={i} />;
        })}
      </ul>
    </>
  );
};

export default App;
