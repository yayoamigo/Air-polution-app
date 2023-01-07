import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import FilterBy from '../Components/FilterBy';
import store from '../Redux/configureStore';

it('render', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <FilterBy />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
