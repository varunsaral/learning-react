import React from 'react'
import Todo  from './Todo';
function Todos(props) {
    return (
        <div className="container">
            <h3 className="text-center my-3"> Todos List</h3>
            
            {props.todos.map((todo)=>{
                return <h4>{todo.title}</h4>      
            })}
           
        </div>
    )
}

export default Todos
