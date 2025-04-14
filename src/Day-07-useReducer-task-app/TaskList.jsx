import React, { useContext, useState } from 'react'
import { TaskListContext } from './Main'

export default function TaskList() {
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(-1);
  const [text, setText] = useState();
  const taskListContext = useContext(TaskListContext)
  console.log(taskListContext);
  const handleEditClick = (txt, id) => {
    if(!edit){
      setText(txt)
      setEditId(id)
    }else {
      console.log("submit handle")
      taskListContext.handleUpdateTask(id, text, false)
    }
    setEdit(!edit)
  }
  return (
    <>
    <div>TaskList</div>
    {
      taskListContext.tasks.map(task => {
        return(
          <div key={task.id}>
            {edit&&editId===task.id ? <input type="text" value={text} onChange={e=>setText(e.target.value)}/> : <input type="text" value={task.text} disabled/>}
            <button onClick={() => {handleEditClick(task.text, task.id)}}>{edit ? 'save' : 'edit'}</button>
            <button>delete</button>
          </div>
        )
      })
    }
    </>
  )
}
