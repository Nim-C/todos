import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import store from '../../store'
import TodosForm from './'

test('renders Todos Form without failing', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <TodosForm />
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
