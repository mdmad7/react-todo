import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos }) => {
  return (
    <div className='TodoList'>
      {todos.length > 0 ? (
        todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p>Nothing todo!!!</p>
      )}
    </div>
  )
}

export default TodoList
