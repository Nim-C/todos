import React from 'react'
import TodosForm from '../TodosForm'
import classnames from 'classnames'
import Todo from './Todo'
import Either from '../util-components/Either'
import './styles.css'
import { useSelector } from 'react-redux'
import { selectTodosList } from '../../features/todos/selectors'

const TodosList = () => {
  const list = useSelector(selectTodosList)
  const todos = Object.keys(list).map(todoKey => {
    const currTodo = list[todoKey]
    return <Todo {...currTodo} key={todoKey} />
  })

  return (
    <div
      className={classnames(
        'd-flex',
        'flex-column',
        'align-items-center',
        'mx-auto',
        'col-12',
        'col-lg-4'
      )}
    >
      <TodosForm />
      <div className={classnames('todos-list-container', 'w-100')}>
        <Either
          condition={Object.keys(list).length}
          ifTrue={todos}
          ifFalse={<h4 id="message-no-todos">No Todo’s to show...</h4>}
        />
      </div>
    </div>
  )
}

export default TodosList
