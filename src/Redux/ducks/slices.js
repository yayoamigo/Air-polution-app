import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { countries:[], isLoading: true, selectedContinent: 'Africa', }

const countryData = [
  { name: "Afghanistan", continent: "Africa", code: "AF" },
  { name: "Algeria", continent: "Africa", code: "DZ" },
  { name: "Angola", continent: "Africa", code: "AO" },
  { name: "Benin", continent: "Africa", code: "BJ" },
  { name: "Botswana", continent: "Africa", code: "BW" },
  { name: "Niger", continent: "Africa", code: "NE" },
  { name: "Albania", continent: "Europe", code: "AL" },
  { name: "Armenia", continent: "Europe", code: "AM" },
  { name: "Azerbaijan", continent: "Europe", code: "AZ" },
  { name: "Bahrain", continent: "Europe", code: "BH" },
  { name: "Belarus", continent: "Europe", code: "BY" },
  { name: "Bulgaria", continent: "Europe", code: "BG" },
  { name: "Argentina", continent: "South America", code: "AR" },
  { name: "Bolivia", continent: "South America", code: "BO" },
  { name: "Brazil", continent: "South America", code: "BR" },
  { name: "Ecuador", continent: "South America", code: "EC" },
  { name: "Colombia", continent: "South America", code: "CO" },
  { name: "Chile", continent: "South America", code: "CL" },
  { name: "Lebanon", continent: "Asia", code: "LB" },
  { name: "Brunei", continent: "Asia", code: "BN" },
  { name: "Cambodia", continent: "Asia", code: "KH" },
  { name: "Indonesia", continent: "Asia", code: "ID" },
  { name: "Laos", continent: "Asia", code: "LA" },
  { name: "Philippines", continent: "Asia", code: "PH" },
  { name: "Canada", continent: "North America", code: "CA" },
  { name: "Cuba", continent: "North America", code: "CU" },
  { name: "Mexico", continent: "North America", code: "MX" },
  { name: "United States", continent: "North America", code: "US" },
  { name: "Haiti", continent: "North America", code: "HT" },
  { name: "Jamaica", continent: "North America", code: "JM" },
  { name: "Fiji", continent: "Oceania", code: "FJ" },
  { name: "Kiribati", continent: "Oceania", code: "KI" },
  { name: "Marshall Islands", continent: "Oceania", code: "MH" },
  { name: "Nauru", continent: "Oceania", code: "NR" },
  { name: "Papua New Guinea", continent: "Oceania", code: "PG" },
  { name: "French Polynesia", continent: "Oceania", code: "PF" },
];


  export const getValues = createAsyncThunk('GET/fetchCountries', async () => {
    const countries = [];
    for (let i = 0; i< countryData.length; i++) {
      try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${countryData[i].code}&limit=1&appid=0df32c5e49f9d686cc8ef9751ef93899`);
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

