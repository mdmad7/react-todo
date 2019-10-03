import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleComplete, removeTodo, todosFilter }) => {
  return (
    <div className='TodoList'>
      {todos.filter(todo => {
        if (todosFilter === 'all') return todo
        if (todosFilter === 'completed') return todo.completed
        if (todosFilter === 'uncomplete') return !todo.completed
        return []
      }).length > 0 ? (
        todos
          .filter(todo => {
            if (todosFilter === 'all') return todo
            if (todosFilter === 'completed') return todo.completed
            if (todosFilter === 'uncomplete') return !todo.completed
            return []
          })
          .map(todo => (
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
