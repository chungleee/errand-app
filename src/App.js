import React, { useState } from 'react'
import Modal from 'react-modal'
import Header from './components/Header'
import TodoList from './components/TodoList'
import AddTodoButton from './components/AddTodoButton'

Modal.setAppElement('#root')
const App = () => {
  return (
    <div>
      <Header />
      <TodoList>
        <AddTodoButton />
      </TodoList>
    </div>
  )
}

export default App
