import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/Todolist";
import { Container } from 'react-bootstrap'


function App() {

  const [todoList, setTodoList] = useState([])
  const [idx, setIdx] = useState(0)

  const createTodos = (inputText, key) => {
    setIdx(() => idx + 1)
    var todo = {text: inputText, key: key, completed: false, marked: false}
    handleTodoList(todo)
  }

  const handleTodoList = (todo) => {
    setTodoList(() => [...todoList, todo])
  }
  

  return (
    <div className="pt-3 black" style={{height: "100vh", width: "100vw", background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"}}>
      <h2 className="text-center text-white mb-3">TodoList</h2>
      <Container className="p-3 border rounded bg-white" style={{maxWidth: "600px"}}>
        <TodoInput createTodos={createTodos} idx={idx} setIdx={setIdx}/>
        <Todolist setTodoList={setTodoList} todoList={todoList} />
      </Container>
    </div>
  );
}

export default App;
