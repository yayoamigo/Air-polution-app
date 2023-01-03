import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { countries:[], isLoading: true,}

const Ecuador = {lat:-3.48444, lon:-80.2257543,}

const URL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${Ecuador.lat}&lon=${Ecuador.lon}&appid=0df32c5e49f9d686cc8ef9751ef93899`;

export const getValues = createAsyncThunk('GET/fetchCountries', async () => {
 try{ const response = await fetch(URL);
  const data = await response.json()
  return data;}
  catch (error) {
   console.error(error);
 }
})

const pullutionSlice = createSlice({
 name: 'GET',
 initialState,
 reducers:{

 },
 extraReducers: (builder) => {
  builder
  .addCase(getValues.pending, (state) => {
   state.isLoading = true;
  })
  .addCase(getValues.fulfilled, (state, {payload}) =>{
   state.isLoading = false;
   state.countries = payload
   console.log(state.countries)
  })
  .addCase(getValues.rejected, (state, action) => {
   console.log(action);
   state.isLoading = false;
  })
 }
})

export default pullutionSlice;