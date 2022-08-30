import React from 'react'

export default function TodoList(props) {
  return (
    <div className=' border border-2 rounded-3 d-flex flex-row mb-3 align-items-center'>
    <h1 className="p-2 border border-top-0 border-start-0 border-bottom-0 " style={{marginBottom: 0, margin: "0 5px"}}>{props.todo.sno}</h1>
    <div className="p-2">
        {props.key}
      <h4>{props.todo.title}</h4>
      <p style={{marginBottom: 0}}>{props.todo.desc}</p>
    </div>
    <button className='btn btn-danger ms-auto p-2' style={{marginRight : "1rem"}} onClick={()=>{props.onDelete(props.todo)}} >Delete</button>
    </div>
  )
}
