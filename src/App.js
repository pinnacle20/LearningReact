import logo from './logo.svg';
import './App.css';
import Header from './Mycomponent/Header';
import Todos from './Mycomponent/Todos';
import Footer from './Mycomponent/Footer';
import AddTodo from './Mycomponent/AddTodo';
import { useEffect, useState } from 'react';

function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log('onDelete triggered', todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }
    ));
  }
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, newTodo]);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title="Ciao!" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
