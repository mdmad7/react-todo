import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const rootReducer = (state = { todos: [], todosFilter: 'all' }, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      let storedTodos = localStorage.getItem('todos')
      if (storedTodos !== '' && storedTodos !== null) {
        return { ...state, todos: JSON.parse(storedTodos) }
      }
      return state
    case 'ADD_TODO':
      let newAddTodos = [action.todo, ...state.todos]
      localStorage.setItem('todos', JSON.stringify(newAddTodos))
      return { ...state, todos: newAddTodos }
    case 'CHECK_OFF_TODO':
      let newCheckedTodos = state.todos.map(todo =>
        todo.id !== action.id ? todo : { ...todo, completed: !todo.completed }
      )
      localStorage.setItem('todos', JSON.stringify(newCheckedTodos))
      return { ...state, todos: newCheckedTodos }
    case 'REMOVE_TODO':
      let newTodos = state.todos.filter(todo => todo.id !== action.id)
      localStorage.setItem('todos', JSON.stringify(newTodos))
      return { ...state, todos: newTodos }
    case 'FILTER_TODOS':
      return {
        ...state,
        todosFilter: action.todosFilter
      }

    default:
      return state
  }
}

const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
