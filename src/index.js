import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import debounce from 'lodash/debounce'
import App from './components/App'
import store from './store'

const debounceSaveStore = debounce(() => {
  const serializedState = JSON.stringify(store.getState())
  localStorage.setItem('state', serializedState)
}, 1000)

store.subscribe(debounceSaveStore)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
