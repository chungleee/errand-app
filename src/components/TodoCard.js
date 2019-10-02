import React, { useState } from 'react'
import Modal from 'react-modal'

const TodoCard = ({ title, todos }) => {
  // MODAL
  // modal state
  const [modal, setModal] = useState(false)
  // modal trigger func
  const handleModal = () => {
    setModal(!modal)
  }
  return (
    <div
      onClick={handleModal}
      className="h4 w4 ba mr3 mb3 br4 flex items-center justify-center tc grow"
    >
      <div>
        <p className="b">{title}</p>
      </div>
      <Modal
        onRequestClose={() => {
          handleModal()
        }}
        isOpen={modal}
      >
        <h1>{title}</h1>
        {todos.map((todo, idx) => {
          return <li key={idx}>{todo}</li>
        })}
      </Modal>
    </div>
  )
}
export default TodoCard
