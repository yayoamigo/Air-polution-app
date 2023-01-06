import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Search from '../Components/Search';
import store from '../Redux/configureStore';

it('render', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Search />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});