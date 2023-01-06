import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Nav from '../Components/Nav';
import store from '../redux/configureStore';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';


it('render', () => {
  const tree = renderer
    .create(
    <Router>
        <Provider store={store}>
          <Nav />
        </Provider>
    </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders content', () => {
  const component = render(
    <Router>
    <Provider store={store}>
      <Nav/>
    </Provider>
    </Router>
  );
  expect(component.container).toHaveTextContent('Air polution app');
});