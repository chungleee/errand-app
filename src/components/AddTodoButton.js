import React from 'react'
import Modal from 'react-modal'

const AddTodoButton = ({ handleOpenModal, handleCloseModal, showModal }) => {
  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="h4 w4 mr3 ba br4 flex items-center justify-center tc grow bg-white b--black"
      >
        +
      </button>
      <Modal onRequestClose={handleCloseModal} isOpen={showModal}>
        some content from AddTodoButton component
      </Modal>
    </div>
  )
}

export default AddTodoButton
