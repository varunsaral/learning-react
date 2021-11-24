import React from 'react'

function Todo({todo,ondelete}) {
    return (
        <div>
            
            {/* <h4>{todo.title}</h4> */}
            <button className = "btn btn-sm btn-danger" onClick={ondelete}>Delete</button>
           
        </div>
    )
}

export default Todo
 