import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import AddTodo from './components/AddTodo'

import Todo from "./components/Todo"
import { addTodo, updateTodo } from './features/todo/todoSlice';
import { useState } from 'react';


function App() {
  const [input, setInput] = useState('');
  const [update, setUpdate] = useState(false);
  const [todoIdToUpdate, setTodoIdToUpdate] = useState(null);
  const todos = useSelector(state => state.todos);
  const disPatch = useDispatch();

  const addOrUpdateTodoHandler = (e) => {
    e.preventDefault();
    if (update && todoIdToUpdate) {
      // If in update mode, dispatch the updateTodo action
      const updatedTodo = {
        id: todoIdToUpdate,
        text: input,
      };
      disPatch(updateTodo(updatedTodo));
      setUpdate(false);
      setTodoIdToUpdate(null);
    } else {
      // If not in update mode, dispatch the addTodo action
      disPatch(addTodo(input));
    }
    setInput('');
  };

  const startUpdateHandler = (todoId) => {
    // Set the input value to the text of the todo being updated
    const todoToUpdate = todos.find((todo) => todo.id === todoId);
    if (todoToUpdate) {
      setInput(todoToUpdate.text);
      setUpdate(true);
      setTodoIdToUpdate(todoId);
    }
  };


  return (
    <div className='app'>
      <h1>Todo App</h1>
      <AddTodo addOrUpdateTodoHandler={addOrUpdateTodoHandler} input={input} setInput={setInput} update={update} setUpdate={setUpdate} />
      <Todo setUpdate={setUpdate} startUpdateHandler={startUpdateHandler} />
    </div>
  )
}

export default App
