import '../components/styles/todo.styles.css'
// eslint-disable-next-line react/prop-types
export default function AddTodo({ addOrUpdateTodoHandler, input, setInput, update }) {


    return (
        <form onSubmit={addOrUpdateTodoHandler}>
            
            <input type='text' placeholder='Enter a Todo' value={input} onChange={(e) => setInput(e.target.value)} />
            {
                update ? <button >Update</button> : <button>Add Todo</button>
            }
        </form>
    )
}
