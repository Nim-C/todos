import React, { useCallback } from 'react'
import classnames from 'classnames'
import './styles.css'

import { ReactComponent as TrashCanIcon } from '../../../trash-solid.svg'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../../../features/todos/todosSlice'

const Todo = ({ id, name, completed }) => {
  const dispatch = useDispatch()

  const handleRemoveTodo = useCallback(() => {
    dispatch(removeTodo({ id }))
  }, [dispatch, id])

  const handleToggleTodo = useCallback(() => {
    dispatch(toggleTodo({ id }))
  }, [dispatch, id])

  return (
    <div
      className={classnames('card', 'rounded', 'bg-white', 'mb-4', 'col-12', {
        shadow: !completed,
        'shadow-sm': completed
      })}
    >
      <div
        className={classnames(
          'card-body',
          'd-flex',
          'justify-content-between',
          'todo-name'
        )}
      >
        <div className={classnames('custom-control', 'custom-checkbox')}>
          <input
            type="checkbox"
            className="custom-control-input"
            id={`todo-${id}-checkbox`}
            onChange={handleToggleTodo}
          />
          <label
            className={classnames('custom-control-label', {
              'todo-completed': completed
            })}
            htmlFor={`todo-${id}-checkbox`}
          >
            {name}
          </label>
        </div>
        <TrashCanIcon className="trash-icon" onClick={handleRemoveTodo} />
      </div>
    </div>
  )
}

export default Todo
