import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import TaskList from './components/TaskList'
import Modal from './components/Modal'

function App() {
  
  const [search, setSearch] = useState('')
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [id, setId] = useState(1)

  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [modalDetails, setModalDetails] = useState({});

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const filteredTasks = () => {
    return search.length ? tasks.filter((task) => task.name.toLowerCase().includes(search.toLowerCase())) : tasks
  }

  const sortedTasks = () => {
    return filteredTasks().sort((a, b) => a.done - b.done)
  }

  const completedTasks = () => {
    return tasks.filter((task) => task.done).length
  }

  const totalTasks = () => {
    return tasks.length
  }

  const confirmCreate = () => {
    setModalDetails({
      title: 'Nova tarefa',
      buttonLabel: 'Salvar',
      operation: 'save'
    })
    setTask('')
    openModal()
  } 

  const createTask = () => {
    setTasks([...tasks, {id: id, name: task, done: false}])
  }
  
  const concludeTask = (taskId) => {
    setTasks(tasks.map((item) => 
      item.id === taskId ? { ...item, done: !item.done } : item
    ))
  }

  const confirmEdit = (taskId) => {
    setSelectedTask(taskId)
    let taskToEdit = tasks.find((task) => task.id === taskId)
    setTask(taskToEdit ? taskToEdit.name : '')
    setModalDetails({
      title: 'Editar tarefa',
      buttonLabel: 'Editar',
      operation: 'edit'
    })
    openModal()
  } 

  const editTask = () => {
    setTasks(tasks.map((item) =>
      item.id === selectedTask ? { ...item, name: task } : item
    ))
  }

  const confirmDelete = (taskId) => {
    setSelectedTask(taskId)
    setModalDetails({
      title: 'Deletar tarefa?',
      buttonLabel: 'Confirmar',
      operation: 'delete'
    })
    openModal()
  } 

  const deleteTask = () => {
    setTasks(tasks.filter((task) => task.id !== selectedTask))
  }

  const taskHandler = (operation) => {
    if (operation === 'save') {
      if (!task.length) return
      createTask()
      setId(id + 1)
    } else if (operation === 'edit') {
      if (!task.length) return
      editTask()
    } else if (operation === 'delete') {
      deleteTask()
    }
    setSelectedTask(null)
    setTask('')
    closeModal()
  }

  return (
    <>
      <div>
        <Header completedTasks={completedTasks()} totalTasks={totalTasks()}/>
        <SearchBar search={search} setSearch={setSearch}/>
        <TaskList
          tasks={sortedTasks()}
          search={search}
          concludeTask={concludeTask}
          confirmEdit={confirmEdit}
          confirmDelete={confirmDelete}
        />
        <Modal
          modalDetails={modalDetails}
          task={task}
          isOpen={isOpen}
          setTask={setTask}
          taskHandler={taskHandler}
          confirmCreate={confirmCreate}
          closeModal={closeModal}
        />
      </div>
    </>
  )
}

export default App
