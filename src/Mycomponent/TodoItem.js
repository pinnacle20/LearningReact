import React from 'react'

export default function TodoItem(props) {
  return (
    <div className='mt-4'>
      <h5>{props.todo.title}</h5>
      <p>{props.todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={() => { props.onDelete(props.todo) }}>Delete</button>
    </div>
  )
}
