import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Header from './components/Header'
import TodoList from './components/TodoList'
import AddTodoButton from './components/AddTodoButton'
import TodoCard from './components/TodoCard'

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
      handleGetItems()
    },
    // component updates depending if errands has been added
    [errands]
  )

  const handleGetItems = () => {
    // check if storage exists
    // if false
    if (!window.localStorage) {
      return alert('Storage unavailable')
    } else {
      // if true
      // loop thru localStorage
      const keys = Object.keys(localStorage)
      const json = keys.map(key => {
        // get every item
        const item = localStorage.getItem(key)
        // parse json
        return JSON.parse(item)
      })
      // setStorage
      setStorage(json)
    }
  }

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
              return <TodoCard title={title} todos={errands} key={idx} />
            })}
      </TodoList>
    </div>
  )
}

export default App
