import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { countries:[], isLoading: true, codes:[
  "AF", "DZ", "AO", "BJ", "BW",  // Africa
  "AL", "AM", "AZ", "BH", "BY",  // Europe
  "AR", "BO", "BR", "EC", "CO",  // South America
  "AU", "BN", "KH", "ID", "LA",  // Asia
  "CA", "CU", "MX", "US", "HT",  // North America
  "FJ", "KI", "MH", "NR", "PG",  // Oceania
], }

export const countryCodes = [
  "AF", "DZ", "AO", "BJ", "BW",  // Africa
  "AL", "AM", "AZ", "BH", "BY",  // Europe
  "AR", "BO", "BR", "EC", "CO",  // South America
  "AU", "BN", "KH", "ID", "LA",  // Asia
  "CA", "CU", "MX", "US", "HT",  // North America
  "FJ", "KI", "MH", "NR", "PG",  // Oceania
];


  export const getValues = createAsyncThunk('GET/fetchCountries', async () => {
    const countries = [];
    for (const code of countryCodes) {
      try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${code}&limit=1&appid=0df32c5e49f9d686cc8ef9751ef93899`);
        const data = await response.json();
        const lat = data[0].lat;
        const lon = data[0].lon;
        
        const pollutionResponse = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=0df32c5e49f9d686cc8ef9751ef93899`);
        const pollutionData = await pollutionResponse.json();
        countries.push(pollutionData);
      } catch (error) {
        console.error(error);
      }
    }
    return countries;
  });
  
  const pullutionSlice = createSlice({
    name: 'GET',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getValues.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getValues.fulfilled, (state, { payload }) => {
          state.isLoading = false;
          state.countries = payload;
          console.log(state.countries);
        })
        .addCase(getValues.rejected, (state, action) => {
          console.log(action);
          state.isLoading = false;
        });
    },
  });
  
  export default pullutionSlice;

