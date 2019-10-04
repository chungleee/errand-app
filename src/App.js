import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Header from './components/Header'
import TodoList from './components/TodoList'
import AddTodoButton from './components/AddTodoButton'
import TodoCard from './components/TodoCard'
import { handleGetItems } from './utilities'

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

  // STORAGE VALUES
  const [storage, setStorage] = useState([])

  // component mount
  useEffect(
    () => {
      // gets items from storage on mount
      handleGetItems(setStorage)
    },
    // component updates depending if errands has been added
    [errands]
  )

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
        {storage.length === 0
          ? null
          : storage.map(({ title, errands }, idx) => {
              return (
                <TodoCard
                  setStorage={setStorage}
                  title={title}
                  todos={errands}
                  key={idx}
                />
              )
            })}
      </TodoList>
    </div>
  )
}

export default App
