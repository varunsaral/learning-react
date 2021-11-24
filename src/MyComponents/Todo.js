import React from 'react'

function Todo({todo,ondelete}) {
    return (
        <div>
<div class="card" >
  <div class="card-header">
   Task
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{todo.sno}</li>
    <li class="list-group-item">{todo.title}</li>
    <li class="list-group-item">{todo.desc}</li>
    
  </ul>
</div>
<button className = "btn btn-sm btn-danger" onClick={()=>{ondelete(todo)}}>Delete</button>
        </div>
    )
}

export default Todo
 