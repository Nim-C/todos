import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../features/todos/todosSlice'
import classnames from 'classnames'
import './styles.css'

const TodosForm = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleChangeName = useCallback(e => setName(e.target.value), [])
  const handleAddTodo = useCallback(() => {
    if (name) {
      dispatch(addTodo({ name }))
      setName('')
    }
  }, [dispatch, name])

  return (
    <div
      className={classnames(
        'd-flex',
        'justify-content-between',
        'p-0',
        'col-12',
        'form-container',
        'mb-4'
      )}
    >
      <input
        value={name}
        className={classnames(
          'todo-name-input',
          'form-control',
          'mr-3',
          'my-2'
        )}
        type="text"
        placeholder="Add todo’s..."
        onChange={handleChangeName}
      />
      <button
        type="button"
        className={classnames('btn', 'btn-success', 'my-2')}
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  )
}

export default TodosForm
