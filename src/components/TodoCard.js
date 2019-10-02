import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')
const TodoCard = ({ title, todos }) => {
  // MODAL
  // modal state
  const [modal, setModal] = useState(false)
  // modal trigger func
  const handleModal = () => {
    setModal(!modal)
  }
  return (
    <div>
      <div
        className="h4 w4 ba mr3 mb3 br4 flex items-center justify-center tc grow"
        onClick={() => {
          handleModal()
        }}
      >
        <p className="b">{title}</p>
      </div>
      <Modal
        onRequestClose={() => {
          handleModal()
        }}
        isOpen={modal}
        closeTimeoutMS={300}
        style={{ content: { backgroundColor: '#FFFCEB' } }}
      >
        <section className="tc h-100 flex flex-column justify-center">
          <div className="pt3 pb3">
            <h1 className="f1 red">{title}</h1>
          </div>
          <ul className="list pl0 mt3 mb3">
            {todos.map((todo, idx) => {
              return (
                <li className="mt1 mb1 pa2 f4" key={idx}>
                  {todo}
                </li>
              )
            })}
          </ul>
        </section>
      </Modal>
    </div>
  )
}
export default TodoCard
