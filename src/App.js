import React, { useState, useEffect } from 'react'
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
  // errands state
  const [errands, setErrands] = useState([])
  useEffect(() => {
    // check if localstorage exists
    if (!window.localStorage) {
      return null
    } else {
      // loop localstorage
      for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          // parse each key
          const json = JSON.parse(localStorage[key])

          // update state
          setErrands(errands.push(json))
        }
      }
    }
  }, [])

  return (
    <div>
      <Header />
      <TodoList>
        <AddTodoButton modal={modal} handleModal={handleModal} />
      </TodoList>
    </div>
  )
}

export default App
