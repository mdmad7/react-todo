import React from 'react'

const TodoItem = ({
  todo: { title, id, completed },
  toggleComplete,
  removeTodo
}) => {
  return (
    <div className={`TodoItem ${completed ? 'completed-todo' : ''}`}>
      <div
        onClick={() => {
          toggleComplete(id)
        }}
        className={`TodoItem--title ${completed ? 'TodoItem--completed' : ''}`}
      >
        <span>{title}</span>
      </div>
      <div className='TodoItem--actions' onClick={() => removeTodo(id)}>
        X
      </div>
    </div>
  )
}

export default TodoItem
