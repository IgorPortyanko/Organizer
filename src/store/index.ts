import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from './slices/todoSlice'

const rootReducer = combineReducers({
    todo: todoReducer
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}