import { render, act } from 'react-testing-library';
import HomePage from '../Pages/HomePage';
import Details from '../Pages/Details';

test('renders Details component after data has been fetched', async () => {
  // Set up a mock for the `getValues` action that immediately resolves with some dummy data
  const mockGetValues = jest.fn().mockResolvedValue({
    type: 'GET/fetchCountries/fulfilled',
    payload: { data: [{ name: 'Test country', continent: 'Test continent' }] },
  });

  // Render the HomePage component
  const { getByTextElement } = render(<HomePage />);

  // Wait for the mock `getValues` action to be called and resolved
  await act(async () => {
    // Dispatch the mock `getValues` action
    dispatch(mockGetValues());

    // Wait for the data to be fetched and the component to re-render
    await waitForElement(() => getByTextElement('Test country'));
  });

  // Now that the data has been fetched, render the Details component with the name of the dummy country as a prop
  const { getByText } = render(<Details name="Test country" />);

  // Assert that the Details component is rendering the correct data
  expect(getByText('Test continent')).toBeInTheDocument();
});