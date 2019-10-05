import React from 'react'

const TodoFilters = ({ filterTodos, todosFilter }) => {
  return (
    <div className='TodoFilters'>
      <label>
        <input
          type='radio'
          checked={todosFilter === 'completed' ? true : false}
          onChange={() => filterTodos('completed')}
        />
        Completed
      </label>

      <label>
        <input
          type='radio'
          value='uncomplete'
          checked={todosFilter === 'uncomplete' ? true : false}
          onChange={() => filterTodos('uncomplete')}
        />
        Uncomplete{' '}
      </label>

      <label>
        <input
          type='radio'
          value='all'
          checked={todosFilter === 'all' ? true : false}
          onChange={() => filterTodos('all')}
        />
        All{' '}
      </label>
    </div>
  )
}

export default TodoFilters
