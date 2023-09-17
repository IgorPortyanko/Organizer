import './Todo.css'
import NewTodo from './NewTodo'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from 'react-redux'
import { TodoItemIf } from '../models/models'
import { RootState, addTodo } from '../../store/slices/todoSlice'
import { useEffect } from 'react'

const Todo = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const storedTodos = localStorage.getItem('tasks')

        if (storedTodos) {
            const storedTasks:[] = JSON.parse(storedTodos)
            dispatch(addTodo(storedTasks))
        }
    }, [])

    const todos: TodoItemIf[] = useSelector((state: RootState) => state.todo.todo)

    return (
        <div className="todo-wraper">
            <NewTodo/>
            <div className='todo-container'>
                <ul>
                    { todos?.map((el) => 
                        <li key={el.id}> <TodoItem task = {el} /></li>
                    )}
                    
                </ul>
            </div>
        </div>
    )
}

export default Todo