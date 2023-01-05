import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import HomePage from '../Pages/HomePage';
import Details from '../Pages/Details';
import store from '../Redux/configureStore';

it('render', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});


