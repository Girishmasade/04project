import React, {useState} from 'react'
import {TodoProvider} from '../context'
import {TodoForm, TodoItem} from '../components'

const Skill = () => {
    const [todos, setTodos] = useState([])

const addTodo = (todo) => {
    setTodos((prev) => [{id:date.now(), ...todo}, ...prev])
}

const updateTodo = (id,  todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo) ))
}

const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => (todo.id !== id)))
}

const toggleTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed:prevTodo.completed}: prevTodo))
}

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
        <div>
        <div >
                    <h1 className="text-2xl">Know about your skills</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
    
  )
}

export default Skill