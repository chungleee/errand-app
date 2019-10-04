import React, { useState } from 'react'
import Modal from 'react-modal'
import { handleGetItems } from '../utilities'

Modal.setAppElement('#root')
const TodoCard = ({ title, todos, setStorage }) => {
  // MODAL
  // modal state
  const [modal, setModal] = useState(false)
  // modal trigger func
  const handleModal = () => {
    setModal(!modal)
  }

  // delete errand handler
  const handleDeleteItem = () => {
    localStorage.removeItem(title)
    handleGetItems(setStorage)
  }

  // handle complete
  const handleCompleted = todo => {
    const storage = JSON.parse(localStorage.getItem(title))
    storage.errands.forEach(errand => {
      if (errand.task === todo.task) {
        return (errand.completed = !errand.completed)
      }
    })
    localStorage.setItem(title, JSON.stringify(storage))
    handleGetItems(setStorage)
  }

  return (
    <div>
      <div className="h4 w4 ba mr3 mb3 br4 flex items-center justify-center tc grow">
        <span
          onClick={handleDeleteItem}
          className="red b"
          style={{
            position: 'absolute',
            top: '10px',
            right: '12px',
            cursor: 'pointer'
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </span>
        <div
          onClick={() => {
            handleModal()
          }}
          className="b flex items-center justify-center"
          style={{ cursor: 'pointer', height: '90%', width: '90%' }}
        >
          {title}
        </div>
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
          <ul className="list pl0 mt3 mb3 mw6-ns flex flex-column items-center">
            {todos.map((todo, idx) => {
              return (
                <li className="mt1 mb1 pa2 f4 w-70" key={idx}>
                  <div className="flex justify-center items-center">
                    <p
                      className={todo.completed ? 'strike' : null}
                      style={{ wordWrap: 'break-word' }}
                    >
                      {todo.task}
                    </p>
                    <i
                      onClick={() => {
                        handleCompleted(todo)
                      }}
                      style={{ marginLeft: 'auto', cursor: 'pointer' }}
                      className={
                        todo.completed ? 'fas fa-check green' : 'fas fa-check'
                      }
                    ></i>
                  </div>
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
