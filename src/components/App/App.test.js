import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import App from './'
import store from '../../store'

test('Renders App without failing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})
