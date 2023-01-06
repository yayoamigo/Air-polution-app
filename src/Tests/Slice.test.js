import pullutionSlice from "../Redux/ducks/slices";
import { getValues } from "../Redux/ducks/slices"; 
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('polutionSlice', () => {
    it('should handle the getValues.fulfilled action', () => {
      // Define the initial state and the payload of the action
      const initialState = {
        countries: [], isLoading: true, selectedContinent: 'All', search: '',
      };
      const payload = [{
        "coord":[
          50,
          50
        ]
        }];
  
      // Dispatch the action
      const state = pullutionSlice.reducer(initialState, {
        type: getValues.fulfilled.type,
        payload,
      });
  
      // Assert that the state was correctly updated
      expect(state.countries).toEqual([{...payload[0],Continent:"Africa",Name:"Afghanistan"}]);
    });
  });



describe('getValues', () => {
  it('should dispatch the getValues.fulfilled action on success', async () => {
    // Create a mock store with the thunk middleware
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});

    // Define the mock response of the fetch function
    const response = {
      ok: true,
      json: () => Promise.resolve([{
        "coord":[
          50,
          50
        ]
        }]),
    };
    // Set up the mock implementation of the fetch function
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve(response));

    // Dispatch the thunk
    await store.dispatch(getValues());

    // Assert that the store correctly dispatched the fulfilled action
    expect(store.getActions()).toEqual([
      { type: getValues.pending.type, meta: { arg: undefined, requestId: expect.any(String), requestStatus: 'pending' } },
      { type: getValues.fulfilled.type, meta: { arg: undefined, requestId: expect.any(String), requestStatus: 'fulfilled' }, payload: [[{"coord": [50, 50]}], 
      [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}], 
      [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}],
       [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}],
        [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}],
         [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}],
          [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}],
           [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}], 
           [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}], [{"coord": [50, 50]}], 
           [{"coord": [50, 50]}], [{"coord": [50, 50]}]] },
    ]);
  });
});