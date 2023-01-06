import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import HomePage from '../Pages/HomePage';
import store from '../Redux/configureStore';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([{ description: 'this is a test' }]),
}));

afterEach(() => {
  fetch.mockClear();
});

test('renders content', () => {
  const component = render(
    <Provider store={store}>
      <HomePage />
    </Provider>,
  );
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(component).toBeDefined();
});
