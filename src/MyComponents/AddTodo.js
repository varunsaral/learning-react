import React from 'react'
import {useState} from 'react'
function AddTodo({addTodo}) {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState(""); 
    const submit = (e)=>{
        e.preventDefault(); 
        if(!title || !desc){
        alert("Don't leave it blank");
        }
        addTodo(title,desc);
        setTitle("");
        setDesc("");
    }
    return (
        <div className="container my=3">
            <h3>Add a todo</h3>
            <form onSubmit= {submit}> 
  <div className="form-group">
    <label htmlFor="Title">Todo Title</label>
    <input type="text" value = {title} onChange = {(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title"/>
  </div>
  <div className="form-group">
    <label htmlFor="Desc">Todo Description</label>
    <input type="text" value = {desc} onChange = {(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Description"/>
  </div>
  
  <button type="submit" className="btn btn-success btn-sm">Submit</button>
</form>
        </div>
    )
}

export default AddTodo
