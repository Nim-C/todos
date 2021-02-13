import React from 'react'
import './styles.css'
import TodosList from '../TodosList'
import classnames from 'classnames'

function App() {
  return (
    <div className={classnames('App', 'd-flex', 'flex-column')}>
      <header className={classnames('App-header', 'd-flex', 'flex-column')}>
        <h1>My ToDo’s</h1>
      </header>
      <TodosList />
    </div>
  )
}

export default App
