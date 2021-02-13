import { createSlice } from '@reduxjs/toolkit'
import memoize from 'lodash/memoize'

const loadState = memoize(() => {
  try {
    const serializedState = localStorage.getItem('state')
    if (!serializedState) {
      return {}
    }
    return JSON.parse(serializedState)
  } catch (error) {
    return
  }
})

const getInitialState = () => {
  const loadedState = loadState()
  return {
    list: loadedState?.todos?.list ?? {}
  }
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: getInitialState(),
  reducers: {
    addTodo: (state, { payload: { name } }) => {
      const newTodoId = Date.now()
      const newTodo = { id: newTodoId, name, completed: false }
      state.list[newTodoId] = newTodo
    },
    toggleTodo: (state, { payload: { id } }) => {
      state.list[id].completed = !state.list[id].completed
    },
    removeTodo: (state, { payload: { id } }) => {
      const { [id]: value, ...rest } = state.list
      state.list = { ...rest }
    }
  }
})

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions

export default todosSlice.reducer
