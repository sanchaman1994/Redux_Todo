import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from "../features/todo/todoSlice"

// eslint-disable-next-line react/prop-types
export default function Todo({ startUpdateHandler }) {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();





    return (
        <div className='Card-wrap'>
            <h2>Todos</h2>
            {
                todos.map((todo) => (
                    <div className='card' key={todo.id}>
                        <li >
                            <div>
                                {todo.text}
                            </div>
                            <div className='buttons'>
                                <button onClick={() => startUpdateHandler(todo.id)}>Update</button>
                                <button className='buttonX' onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                            </div>
                        </li>
                    </div>
                ))
            }
        </div>

    )
}
