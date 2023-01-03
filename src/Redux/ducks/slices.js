import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { countries:[], isLoading: true, selectedContinent: 'Africa', }

const countryData = [
  { name: "Afghanistan", continent: "Africa" },
  { name: "Algeria", continent: "Africa" },
  { name: "Angola", continent: "Africa" },
  { name: "Benin", continent: "Africa" },
  { name: "Botswana", continent: "Africa" },
  { name: "Albania", continent: "Europe" },
  { name: "Armenia", continent: "Europe" },
  { name: "Azerbaijan", continent: "Europe" },
  { name: "Bahrain", continent: "Europe" },
  { name: "Belarus", continent: "Europe" },
  { name: "Argentina", continent: "South America" },
  { name: "Bolivia", continent: "South America" },
  { name: "Brazil", continent: "South America" },
  { name: "Ecuador", continent: "South America" },
  { name: "Colombia", continent: "South America" },
  { name: "Lebanon", continent: "Asia" },
  { name: "Brunei", continent: "Asia" },
  { name: "Cambodia", continent: "Asia" },
  { name: "Indonesia", continent: "Asia" },
  { name: "Laos", continent: "Asia" },
  { name: "Canada", continent: "North America" },
  { name: "Cuba", continent: "North America" },
  { name: "Mexico", continent: "North America" },
  { name: "United States", continent: "North America" },
  { name: "Haiti", continent: "North America" },
  { name: "Fiji", continent: "Oceania" },
  { name: "Kiribati", continent: "Oceania" },
  { name: "Marshall Islands", continent: "Oceania" },
  { name: "Nauru", continent: "Oceania" },
  { name: "Papua New Guinea", continent: "Oceania" },
];

const countryCodes = [
  "AF", "DZ", "AO", "BJ", "BW",  // Africa
  "AL", "AM", "AZ", "BH", "BY",  // Europe
  "AR", "BO", "BR", "EC", "CO",  // South America
  "LB", "BN", "KH", "ID", "LA",  // Asia
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
    reducers: {
      setSelectedContinent(state, action) {
        state.selectedContinent = action.payload
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getValues.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getValues.fulfilled, (state, { payload }) => {
          state.isLoading = false;
          state.countries = payload.map((x, index) => {
            return {...x, Name: countryData[index].name, Continent: countryData[index].continent}
          });
          
        })
        .addCase(getValues.rejected, (state, action) => {
          console.log(action);
          state.isLoading = false;
        });
    },
  });
  
  
export const { setSelectedContinent } = pullutionSlice.actions
  export default pullutionSlice;

