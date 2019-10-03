import React from 'react'

const TodoItem = ({ todo }) => {
  return <div className='TodoItem'>{todo.title}</div>
}

export default TodoItem
