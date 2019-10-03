import React, { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilters from './components/TodoFilters'

const App = () => {
  const [todos, setTodos] = useState([])
  const [todosFilter, setFilter] = useState('all')

  useEffect(() => {
    let storedTodos = localStorage.getItem('todos')
    if (storedTodos !== '' && storedTodos !== null) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  const handleSubmit = todo => {
    let newTodos = [...todos, todo]
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const toggleComplete = id => {
    let newTodos = todos.map(todo =>
      todo.id !== id ? todo : { ...todo, completed: !todo.completed }
    )
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const removeTodo = id => {
    let newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  return (
    <div className='App'>
      <TodoForm handleSubmit={handleSubmit} />
      <TodoFilters todosFilter={todosFilter} setFilter={setFilter} />

      <TodoList
        todos={todos}
        todosFilter={todosFilter}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  )
}

export default App
