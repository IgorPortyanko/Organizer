import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { weatherDataIf } from "../../components/models/models"
import axios from "axios";

export interface RootState {
    weather: weatherState;
  }

export interface weatherState {
    weather: weatherDataIf;
    error: any;
    status: string
}

const initialState: weatherState = {
    weather: {
        city: '',
        weatherInfo: []
    },
    error: null,
    status: ''
}

const apiWeatherKey = process.env.API_WEATHER_KEY

export const getWeather: any = createAsyncThunk ('weather/getWeather', async (_, {rejectWithValue}) => {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=kyiv&lang=ua,uk&appid=53cc075e0594d6ae3c5c3bb2a16bf457`)
        return res.data
    }

    catch (error: any) {
        return rejectWithValue(error.message)
    } 
})

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getWeather.pending, (state) => {
            state.status = 'loading';
            state.error = null
        })
        .addCase(getWeather.fulfilled, (state, action) => {
            state.status = 'resolved';
            console.log(action.payload)
            state.weather.city = action.payload.city.name
            state.weather.weatherInfo = action.payload.list
        })
        .addCase(getWeather.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error
            console.log(action.error)
        })
    },
})

export default weatherSlice.reducer