import React, { useState } from 'react'
import Modal from 'react-modal'
import InputField from './InputField'

const AddTodoButton = ({ handleModal, modal }) => {
  // FORM
  // title state
  const [title, setTitle] = useState('')

  // single task state
  const [task, setTask] = useState('')

  // tasks array state
  const [tasks, setTasks] = useState([])

  // get value
  const handleGetValue = event => {
    if (event.target.name === 'title') {
      setTitle(event.target.value)
    }
    if (event.target.name === 'task') {
      setTask(event.target.value)
    }
  }

  // add task
  const handleAddTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, task.trim()])
      setTask('')
    } else {
      return null
    }
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
        <div
          className="mt3 mb3 mw6-ns flex flex-column items-center"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <InputField
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            className="input-reset mb2 w-75 h2 f3 tc tracked fw6 i"
            style={{ border: 'none', borderBottom: '1px solid black' }}
            onChange={handleGetValue}
          />

          <InputField
            type="text"
            name="task"
            value={task}
            placeholder="Task"
            className="input-reset mb3 w-75 h2 f6 tc tracked fw6 i"
            style={{ border: 'none', borderBottom: '1px solid black' }}
            onChange={handleGetValue}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                handleAddTask()
              }
            }}
          />
          <div>
            <button onClick={handleAddTask}>add</button>
            <button>save</button>
          </div>
        </div>
        <div>
          <h1 className="f2 tc">{title}</h1>
          <ol className="list pl0 tc">
            {tasks.length <= 0
              ? null
              : tasks.map((task, idx) => {
                  return (
                    <li className="pa1" key={idx}>
                      {task}
                    </li>
                  )
                })}
          </ol>
        </div>
      </Modal>
    </div>
  )
}

export default AddTodoButton
