import React, { useContext, useState } from 'react'
import { TaskListContext } from './Main'

export default function AddTask() {
  const [task , setTask] = useState('');
  const taskListContext = useContext(TaskListContext)

  const addTask = () => {
    taskListContext.handleAddTask(task)
  }
  return (
    <>
    <div>AddTask</div>
    <input type='text' onChange={e=>setTask(e.target.value)}/>
    <button onClick={addTask}>Add Task</button>
    </>
  )
}
