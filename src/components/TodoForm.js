import React, { useState } from 'react'

const TodoForm = props => {
  const { handleSubmit } = props
  const [todo, setTodo] = useState('')
  const submitTodo = e => {
    e.preventDefault()
    todo.trim().length > 0 &&
      handleSubmit({ id: Date.now(), title: todo, completed: false })
    setTodo('')
  }
  return (
    <form className='TodoForm'>
      <input value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={submitTodo}>Add</button>
    </form>
  )
}

export default TodoForm
