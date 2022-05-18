import React, {useRef} from 'react'
import { Form, Button } from 'react-bootstrap'


const TodoInput = ({createTodos }) => {

  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    var inputText = inputRef.current.value
    var key = Math.random() * 1000
    createTodos(inputText, key)
    inputRef.current.value = ""
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group className="input-group">
            <Form.Control ref={inputRef} required/>
           <Button variant="info" className='input-group-append text-white' id="basic-addon3" type="submit">Add Todo</Button>
        </Form.Group>
        
    </Form>
  )
}

export default TodoInput