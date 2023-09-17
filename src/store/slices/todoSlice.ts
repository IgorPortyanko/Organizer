import { TodoItemIf } from "../../components/models/models"
import {createSlice} from "@reduxjs/toolkit" 

export interface RootState {
    todo: TodoState;
  }

export interface TodoState {
    todo: TodoItemIf[]
}

const initialState: TodoState = {
    todo: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addNewTodo(state, action){
            state.todo = [...state.todo, action.payload]
            localStorage.setItem('tasks', JSON.stringify(state.todo))
        },
        addTodo(state, action) {
            state.todo = [...action.payload]
        },
        completeTodo(state, action) {
            const task = state.todo.find((el) => el.id === action.payload)
            if (task) {
            task.complete = !task.complete
            localStorage.setItem('tasks', JSON.stringify(state.todo))
            }
        },
        deleteTodo(state, action) {
            state.todo = state.todo.filter((el) => el.id !== action.payload)
            localStorage.setItem('tasks', JSON.stringify(state.todo))
        }
    }

})

export const {addTodo, completeTodo, addNewTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer