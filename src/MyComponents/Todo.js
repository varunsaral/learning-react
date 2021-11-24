import React from 'react'

function Todo({todo,ondelete}) {
    return (
        <div>
<div className="card" >
  <div className="card-header">
   Task
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{todo.sno}</li>
    <li className="list-group-item">{todo.title}</li>
    <li className="list-group-item">{todo.desc}</li>
    
  </ul>
</div>
<button className = "btn btn-sm btn-danger" onClick={()=>{ondelete(todo)}}>Delete</button>
        </div>
    )
}

export default Todo
 