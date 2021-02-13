import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import store from '../../../store'
import Todo from './'

test('renders single todo without failing', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Todo id="013513515122" name="Dummy" completed="false" />
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
