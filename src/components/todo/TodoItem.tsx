import { TodoItemIf } from "../models/models"
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../store/slices/todoSlice";
import ClearIcon from '@mui/icons-material/Clear';

interface TodoItemProps {
    task: TodoItemIf;
  }

const TodoItem: React.FC<TodoItemProps> = ({ task }) => {

    const dispatch = useDispatch()

    const handleCheckboxChange = () => {
        dispatch(completeTodo(task.id))
    }

    const handleDelTask = () => {
        dispatch(deleteTodo(task.id))
    }

    return (

        <div className="todo-item">
            <div className="todo-item-text">
                <p className={task.complete? 'todo-completed' : ''}>{task.text}</p>
            </div>
            <div className="todo-item-check">
                <input
                    className="input-complete-todo"
                    type="checkbox"
                    checked = {task.complete}
                    onChange={handleCheckboxChange}
                />
            </div>
            <div 
                className="todo-item-del"
                onClick={handleDelTask}
            >
                <ClearIcon />
            </div>
        </div>
    )
}

export default TodoItem