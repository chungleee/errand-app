import React, { useState } from 'react'
import Modal from 'react-modal'
import Header from './components/Header'
import TodoList from './components/TodoList'
import AddTodoButton from './components/AddTodoButton'

Modal.setAppElement('#root')
const App = () => {
  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <div>
      <Header />
      <TodoList>
        <AddTodoButton showModal={modal} handleModal={handleModal} />
      </TodoList>
    </div>
  )
}

export default App
