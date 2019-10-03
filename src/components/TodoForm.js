import React, { useState } from 'react'

const TodoForm = props => {
  const { handleSubmit } = props
  const [todo, setTodo] = useState('')
  const submitTodo = e => {
    e.preventDefault()
    handleSubmit({ id: Date.now(), title: todo, completed: false })
    setTodo('')
  }
  return (
    <form>
      <input value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={submitTodo}>Add</button>
    </form>
  )
}

export default TodoForm
