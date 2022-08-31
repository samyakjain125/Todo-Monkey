import React from 'react'

export default function TodoList(props) {
  return (
    <div className=' border border-2 rounded-3 d-flex flex-row mb-3 align-items-center' style={{backgroundColor: props.mode==="light"?"white":"#212529", color: props.mode==="dark"?"white":"black"}}>
    <div className="p-2">
        {/* {props.key} */}
      <h4 className={` text-${props.mode==="light"?"dark ":"light"}`}>{props.todo.title}</h4>
      <p style={{marginBottom: 0}} className={`text-${props.mode==="light"?"dark":"light text-opacity-75"}`}>{props.todo.desc}</p>
    </div>
    <button className='btn btn-danger ms-auto p-2' style={{marginRight : "1rem"}} onClick={()=>{props.onDelete(props.todo)}} >Delete</button>
    </div>
  )
}
