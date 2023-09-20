import React from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';

export default function Redirect(props) {
    const addTodo = props.addTodo;
    const todos = props.todos;
    const onDelete = props.onDelete;
    return (
        <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
        </>
    )
}
