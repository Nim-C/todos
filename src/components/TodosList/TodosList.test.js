import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import store from '../../store'

import TodosList from './'

test('renders Todos List without failing', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <TodosList />
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
