import { addNewTodo } from "../../store/slices/todoSlice"
import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'

const NewTodo = () => {
    const [todoText, setTodoText] = useState('')
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handlInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value)
    }

    const handleAddTodo = () => {
        if (todoText.trim() !== '') {
            const unicId = Date.now()
            dispatch(addNewTodo({id: unicId, text: todoText, complete: false}))
            setTodoText('')
            if (inputRef.current !== null) {
                inputRef.current.focus();
              }
        }
    }

    return (
        <div className="newtodo">
            <div className="field-input-newtodo"></div>
            <input
                ref={inputRef} 
                type="text"
                className="input-newtodo"
                placeholder="Введіть нове завдання"
                value={todoText} 
                onChange={handlInputChange}
            />
            <button
                className="newtodo-btn"
                onClick={handleAddTodo}
            >
                Додати
            </button>
            
        </div>
    )
}

export default NewTodo