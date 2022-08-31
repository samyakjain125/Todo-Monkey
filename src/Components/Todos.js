import React from 'react'
import TodoList from './TodoList'

export default function Todos(props) {
    // console.log(props.todos[0])
  return (
    <div className='container my-4' style={{minHeight : "50vh"}}>
      <h3 className={` text-${props.mode==="light"?"dark ":"light"}`}>Your Todo List</h3>
      
      {props.todos.map((todo)=>{
        return <TodoList  todo={todo} onDelete={props.onDelete} mode={props.mode}  />
      })}
    </div>
  )
}
