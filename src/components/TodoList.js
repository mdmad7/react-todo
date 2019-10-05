import React, { useMemo } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleComplete, removeTodo, todosFilter }) => {
  const filteredTodos = () => {
    return todos.filter(todo => {
      if (todosFilter === 'all') return todo
      if (todosFilter === 'completed') return todo.completed
      if (todosFilter === 'uncomplete') return !todo.completed
      return []
    })
  }
  return (
    <div className='TodoList'>
      {filteredTodos().length > 0 ? (
        filteredTodos().map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))
      ) : (
        <p>Nothing todo!!!</p>
      )}
    </div>
  )
}

export default TodoList
