import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([])

  const handleSubmit = todo => {
    setTodos([...todos, todo])
  }

  return (
    <div className='App'>
      <TodoForm handleSubmit={handleSubmit} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
