import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Countries from '../Components/Countries';
import store from '../redux/configureStore';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';


it('render', () => {
  const tree = renderer
    .create(
    <Router>
        <Provider store={store}>
          <Countries name='Niger' aqi='2' />
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
      <Countries name='Niger' aqi='2' />
    </Provider>
    </Router>
  );
  expect(component.container).toHaveTextContent('NigerAir quality :2more...');
});