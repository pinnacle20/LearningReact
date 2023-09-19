import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    return (
        <div className="container ">
            <h3 className='text-center'>Todos List</h3>
            <div className='mt-4' style={{ marginLeft: "200px" }}>
                { props.todos.length === 0 ? <h6> No Todos to display</h6> :
                    props.todos.map((todo) => {
                        return <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />
                    })
                }
            </div>
        </div>
    )
}
