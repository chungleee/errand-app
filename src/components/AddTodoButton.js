import React, { useState } from 'react'
import Modal from 'react-modal'
import InputField from './InputField'
import { handleSetItem } from '../utilities'
import { useForm } from '../utilities/customHooks'

const AddTodoButton = ({ handleModal, modal, errands, setErrands }) => {
  // input values and handler from custom hook
  const [values, setValues, handleOnChange] = useForm({ title: '', task: '' })

  // tasks to display in modal
  const [tasks, setTasks] = useState([])

  // reset state func
  const handleReset = () => {
    setValues({ title: '', task: '' })
    setTasks([])
  }

  const handleAdd = () => {
    const task = {
      task: values.task,
      completed: false
    }
    setTasks([...tasks, task])
    // setTasks([...tasks, values.task])
    setValues({ ...values, task: '' })
  }

  return (
    <div>
      <div
        onClick={handleModal}
        className="h4 b w4 mr3 mb3 ba br4 flex items-center justify-center tc grow .bg-washed-blue b--black"
        style={{ cursor: 'pointer' }}
      >
        <i className="fas fa-plus green"></i>
      </div>
      <Modal
        onRequestClose={() => {
          handleModal()
        }}
        isOpen={modal}
        closeTimeoutMS={300}
      >
        <h1 className="f2 tc red">Organise your errands</h1>
        <div
          className="mt3 mb3 mw6-ns flex flex-column items-center"
          style={styles.inputControl}
        >
          <InputField
            onChange={handleOnChange}
            type="text"
            name="title"
            value={values.title}
            placeholder="Title"
            className="input-reset mb3 w-75 h2 f3 tc tracked fw6 i"
            style={styles.inputs}
          />

          <InputField
            onChange={handleOnChange}
            type="text"
            name="task"
            value={values.task}
            placeholder="Task"
            className="input-reset mb3 w-75 h2 f6 tc tracked fw6 i"
            style={styles.inputs}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                handleAdd()
              }
            }}
          />
          <div>
            <button className="grow" onClick={handleAdd}>
              add
            </button>
            <button
              className="grow"
              onClick={() => {
                const newErrand = {
                  title: values.title,
                  errands: tasks
                }
                setErrands([...errands, newErrand])
                handleSetItem(newErrand)
                handleReset()
                handleModal()
              }}
            >
              save
            </button>
          </div>
        </div>
        <div>
          <h1 className="f2 tc">{values.title}</h1>
          <ol className="list pl0 tc">
            {tasks.length <= 0
              ? null
              : tasks.map((element, idx) => {
                  return (
                    <li className="pa1" key={idx}>
                      {element.task}
                    </li>
                  )
                })}
          </ol>
        </div>
      </Modal>
    </div>
  )
}

// styling
const styles = {
  inputs: {
    border: 'none',
    borderBottom: '1px solid black'
  },
  inputControl: { marginLeft: 'auto', marginRight: 'auto' }
}

export default AddTodoButton
