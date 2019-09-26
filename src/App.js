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
  const [errands, setErrands] = useState([])
  // function to get data from localStorage
  const fetchStorage = () => {
    if (!window.localStorage) {
      alert(new Error("Sorry, local storage isn't available right now"))
    } else {
      for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          const json = JSON.parse(localStorage[key])
          setErrands(errands.push(json))
        }
      }
    }
    console.log(errands)
  }

  useEffect(() => {
    fetchStorage()
  }, [])

  return (
    <div>
      <Header />
      <TodoList>
        <AddTodoButton
          fetchStorage={fetchStorage}
          modal={modal}
          handleModal={handleModal}
        />
      </TodoList>
    </div>
  )
}

export default App
