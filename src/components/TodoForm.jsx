import React, {useState} from 'react'
import { myTodo } from '../context'

function TodoForm(){
    const [todo, setTodos] = useState('')
    const {addTodo} = myTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return

        addTodo({ todo, completed: false})
        setTodos('')
    }


    return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodos(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg ">
              Add
          </button>
      </form>
  );
}


export default TodoForm;