import React, { useContext, useReducer } from 'react'
import TaskList from './TaskList';
import AddTask from './AddTask';
const initialTasks = [
  {id: 0, text: 'go to office', done: false}
];

let taskId = 1;

const reducer = (state, action) => {
  switch(action.type) {
    case 'CREATE':
      return [...state, {
        id: action.payload.id,
        text: action.payload.text,
        done: false
      }];

    case 'UPDATE':
      console.log("kkkk ", action.payload.id)
      console.log(action.payload.text)
      return state.map(task => {
        if(task.id === action.payload.id) {
          return {
            id: action.payload.id,
            text: action.payload.text,
            done: action.payload.done
          }
        } else {
          return task;
        }
      })

    case 'DELETE':
      return state.filter(task => task.id !== action.payload.id)

  }
}

export const TaskListContext = React.createContext();

export default function Main() {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);

  const handleAddTask = (text) => {
    dispatch({type: 'CREATE', payload: {id: taskId++, text}})
  }

  const handleUpdateTask = (id, text, done) => {
    console.log('update calllll')
    dispatch({type: 'UPDATE', payload: {id, text, done}})
  }

  const handleDeleteTask = (id) => {
    dispatch({type: 'DELETE', payload: {id}})
  }

  return (
    <>
      <div>useReducer task app</div>
      <TaskListContext.Provider value={{tasks, taskDispatch: dispatch, handleAddTask, handleDeleteTask, handleUpdateTask }}>
        <AddTask/>
        <TaskList/>
      </TaskListContext.Provider>
    </>
  )
}
