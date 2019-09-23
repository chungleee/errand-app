import React, { useState } from 'react'
import Modal from 'react-modal'
import Header from './components/Header'
import TodoList from './components/TodoList'
import AddTodoButton from './components/AddTodoButton'

Modal.setAppElement('#root')
const App = () => {
  const [modal, setModal] = useState(false)

  const handleOpenModal = () => {
    setModal(true)
  }

  const handleCloseModal = () => {
    setModal(false)
  }
  return (
    <div>
      <Header />
      <TodoList>
        <AddTodoButton
          showModal={modal}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
        />
      </TodoList>
    </div>
  )
}

export default App
