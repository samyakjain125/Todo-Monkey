// import e from 'express';
import React from 'react'
import { useState } from 'react'

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
//    const newTitle=(e)=>{
//     setTitle(e.target.value)
    
//    }

    const submit=(e) =>{
        e.preventDefault();
        console.log("Title => "+title)
        if(!title){
            console.log("title can't be empty")
            alert("Title can't be empty!")
        }
        else{
            props.addTodo(title, desc);
            setTitle("")
            setDesc("")
        }
    }
  return (
    <div className='container'>
        <h3 className={`my-3 text-${props.mode==="light"?"dark ":"light"}`}>Add your Todo</h3>
      <form >
  <div className="mb-3">
    <label htmlFor="title" className={`form-label text-${props.mode==="light"?"dark":"light text-opacity-75"}`}>Title</label>
    <input type="text" className="form-control" style={{backgroundColor: props.mode==="light"?"white":"#212529", color: props.mode==="dark"?"white":"black"}} id="exampleInputText1" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className={`form-label text-${props.mode==="light"?"dark":"light text-opacity-75"}`}>{`Description (Optional)`}</label>
    <input type="text" className="form-control" style={{backgroundColor: props.mode==="light"?"white":"#212529", color: props.mode==="dark"?"white":"black"}} id="exampleInputDesc1" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
  </div>
  <button onClick={submit} className="btn btn-primary">Add to your list</button>
    </form>
    </div>
  )
}
