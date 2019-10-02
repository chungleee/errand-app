import React, { useState } from 'react'
import Modal from 'react-modal'
import InputField from './InputField'

const AddTodoButton = ({ handleModal, modal, errands, setErrands }) => {
  // custom hook to get values
  const useForm = initialValues => {
    const [values, setValues] = useState(initialValues)

    const handleOnChange = event => {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      })
    }

    return [values, setValues, handleOnChange]
  }

  // input values and handler
  const [values, setValues, handleOnChange] = useForm({ title: '', task: '' })

  // tasks to display in modal
  const [tasks, setTasks] = useState([])

  // save to localStorage
  const handleSetItem = errandObj => {
    // check if localstorage exists
    if (!window.localStorage) {
      // if false - return alert
      return alert("Local Storage doesn't exist")
    } else {
      // if true - set item
      localStorage.setItem(errandObj.title, JSON.stringify(errandObj))
    }
  }

  // reset state func
  const handleReset = () => {
    setValues({ title: '', task: '' })
    setTasks([])
  }

  return (
    <div>
      <button
        onClick={handleModal}
        className="h4 w4 mr3 ba br4 flex items-center justify-center tc grow bg-white b--black"
      >
        +
      </button>
      <Modal
        onRequestClose={() => {
          handleModal()
        }}
        isOpen={modal}
      >
        <h1 className="f2 tc">Organise your errands</h1>
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
                setTasks([...tasks, values.task])
                setValues({ ...values, task: '' })
              }
            }}
          />
          <div>
            <button
              className="grow"
              onClick={() => {
                setTasks([...tasks, values.task])
                setValues({ ...values, task: '' })
              }}
            >
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

// styling
const styles = {
  inputs: {
    border: 'none',
    borderBottom: '1px solid black'
  },
  inputControl: { marginLeft: 'auto', marginRight: 'auto' }
}

export default AddTodoButton
