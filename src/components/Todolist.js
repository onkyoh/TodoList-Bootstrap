import React from 'react'
import {ReactComponent as Checkmark} from '../components/checkmark.svg'
import {ReactComponent as X} from '../components/x.svg'

import { ListGroup, Button, ButtonGroup } from 'react-bootstrap'

const Todolist = ({  setTodoList, todoList, idx, setIdx }) => {

    const handleActive = (id) => {
        var todoListCopy = todoList;
        if (todoListCopy[id].marked === "info") {
            todoListCopy[id].marked = "";
            todoListCopy[id].completed = false
        } else {
            todoListCopy[id].marked = "info";
            todoListCopy[id].completed = true
        }
        setTodoList(() => [...todoListCopy])
    }

    const handleDelete = (id) => {
        var todoListCopy = todoList;
        todoListCopy.splice(id, 1)
        setTodoList(() => [...todoListCopy])
    }

    const handleEmpty = () => {
        var todoListCopy = todoList;
        var notCompleted = todoListCopy.filter(todos => !todos.completed)
        setTodoList(() => [...notCompleted])
    }

    return (
        <>
        <ListGroup className='mt-3 overflow-auto'>
            {todoList.map((todos, i) => (
                <ListGroup.Item key={i} className="d-flex align-items-center" variant={todos.marked}>
                    <div className="user-select-none text-break" style={todos.completed ? {textDecoration: "line-through"} : {}}>
                        {todos.text}
                    </div>
                    <ButtonGroup className='ms-auto'>
                        <Button variant="info" onClick={() => handleActive(i)} className="p-1" style={{width: "40px"}}><Checkmark style={{fill: "white", width: "20px"}}/></Button>
                        <Button variant="primary" onClick={() => handleDelete(i)} className="p-1" style={{width: "40px"}}><X style={{fill: "white", width: "20px"}}/></Button>
                    </ButtonGroup>
                </ListGroup.Item>
            ))}
        </ListGroup>
        <Button variant="outline-primary" className='d-block mx-auto mt-3' onClick={handleEmpty}>Delete all completed</Button>
        </>

  )
}

export default Todolist