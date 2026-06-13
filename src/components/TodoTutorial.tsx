import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { addTodo, removeTodo, toggleTodo } from '../slices/todoSlice'

function TodoTutorial() {
  const todos = useSelector((state: RootState) => state.todos.items)
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  return (
    <div className="example-card">
      <h2>Todo Example</h2>
      <p>This example shows how to manage a todo list with Redux.</p>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          if (!text.trim()) return
          dispatch(addTodo(text.trim()))
          setText('')
        }}
        className="todo-form"
      >
        <input
          type="text"
          value={text}
          placeholder="Enter a new todo"
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul className="todo-list">
        {todos.length === 0 ? (
          <li className="empty">No todos yet. Add one to get started.</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                />
                {todo.text}
              </label>
              <button className="remove-button" onClick={() => dispatch(removeTodo(todo.id))}>
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
      <div className="notes">
        <p>Redux state is shared across the app without prop drilling.</p>
        <p>Dispatch actions to update state and rerender components.</p>
      </div>
    </div>
  )
}

export default TodoTutorial
