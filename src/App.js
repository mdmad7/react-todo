import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilters from './components/TodoFilters'

const App = () => {
  // const [todos, setTodos] = useState([])
  const todos = useSelector(state => state.todos)
  const todosFilter = useSelector(state => state.todosFilter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'GET_TODOS' })
  }, []) // eslint-disable-line

  const handleSubmit = useCallback(todo => {
    dispatch({ type: 'ADD_TODO', todo })
  }, []) // eslint-disable-line

  const toggleComplete = useCallback(id => {
    dispatch({ type: 'CHECK_OFF_TODO', id })
  }, []) // eslint-disable-line

  const removeTodo = useCallback(id => {
    dispatch({ type: 'REMOVE_TODO', id })
  }, []) // eslint-disable-line

  const filterTodos = useCallback(todosFilter => {
    dispatch({ type: 'FILTER_TODOS', todosFilter })
  }, []) // eslint-disable-line

  return (
    <div className='App'>
      <TodoForm handleSubmit={handleSubmit} />
      <TodoFilters filterTodos={filterTodos} todosFilter={todosFilter} />

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
