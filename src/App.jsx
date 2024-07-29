import React from 'react'
import MyForm from './Form/Form'
import { TodoProvider } from './context'
import Skill from './Form/Skill'

function App() {
  return (
    <TodoProvider>
<div>
  <MyForm/>
  <Skill/>
</div>
      
    </TodoProvider>
    
  )
}

export default App
