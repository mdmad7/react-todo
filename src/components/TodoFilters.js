import React from 'react'

const TodoFilters = ({ todosFilter, setFilter }) => {
  return (
    <div className='TodoFilters'>
      <label>
        <input
          type='radio'
          checked={todosFilter === 'completed' ? true : false}
          onChange={() => setFilter('completed')}
        />
        Completed
      </label>

      <label>
        <input
          type='radio'
          value='uncomplete'
          checked={todosFilter === 'uncomplete' ? true : false}
          onChange={() => setFilter('uncomplete')}
        />
        Uncomplete{' '}
      </label>

      <label>
        <input
          type='radio'
          value='all'
          checked={todosFilter === 'all' ? true : false}
          onChange={() => setFilter('all')}
        />
        All{' '}
      </label>
    </div>
  )
}

export default TodoFilters
