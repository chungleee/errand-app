import React, { useState } from 'react'
import Modal from 'react-modal'

const AddTodoButton = () => {
  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <div>
      <button
        onClick={handleModal}
        className="h4 w4 mr3 ba br4 flex items-center justify-center tc grow bg-white b--black"
      >
        +
      </button>
      <Modal onRequestClose={handleModal} isOpen={modal}>
        <h1 className="f2 tc">Organise your errands</h1>
        <form className="mt3 mw6-ns flex flex-column items-center">
          <input
            type="text"
            name="title"
            className="input-reset mb2 w-75 h2 f3 tc tracked fw6 i"
            style={{ border: 'none', borderBottom: '1px solid black' }}
            placeholder="Title"
          />
          <input
            type="text"
            name="task"
            className="input-reset w-75 h2 f6 tc tracked fw6 i"
            style={{ border: 'none', borderBottom: '1px solid black' }}
            placeholder="Task"
          />
          <input type="submit" value="add task" />
        </form>
        <div>
          <h1 className="f2">{}</h1>
        </div>
      </Modal>
    </div>
  )
}

export default AddTodoButton
