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
        <h1 className="f2 tc">Organise your errands</h1>
        <form className="mt3 mw6-ns flex flex-column items-center">
          <input
            type="text"
            className="input-reset mb2 w-75 h2 f3 tc tracked fw6 i"
            style={{ border: 'none', borderBottom: '1px solid black' }}
            placeholder="Title"
          />
          <input
            type="text"
            className="input-reset w-75 h2 f6 tc tracked fw6 i"
            style={{ border: 'none', borderBottom: '1px solid black' }}
            placeholder="Task"
          />
        </form>
      </Modal>
    </div>
  )
}

export default AddTodoButton
