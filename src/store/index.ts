import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from './slices/todoSlice'
import weatherReducer from './slices/weatherSlice'

const rootReducer = combineReducers({
    todo: todoReducer,
    weather: weatherReducer 
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}