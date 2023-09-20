import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    return (
        <div className="container mt-4">
            <div className='mt-5' style={{ marginLeft: "200px" }}>
            <h3 >Todos List</h3>
            <hr />
                { props.todos.length === 0 ? <h6> No todo to display</h6> :
                    props.todos.map((todo) => {
                        return <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />
                    })
                }
            </div>
        </div>
    )
}
