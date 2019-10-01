import React, { useState } from 'react'
import Modal from 'react-modal'
import Header from './components/Header'
import TodoList from './components/TodoList'
import AddTodoButton from './components/AddTodoButton'

Modal.setAppElement('#root')
const App = () => {
  // MODAL
  // modal state
  const [modal, setModal] = useState(false)
  // modal trigger func
  const handleModal = () => {
    setModal(!modal)
  }

  // ERRANDS
  const [errands, setErrands] = useState([])

  return (
    <div>
      <Header />
      <TodoList>
        <AddTodoButton
          modal={modal}
          handleModal={handleModal}
          errands={errands}
          setErrands={setErrands}
        />
      </TodoList>
    </div>
  )
}

export default App
