import logo from './logo.svg';
import './App.css';
import Header from './Mycomponent/Header';
import Todos from './Mycomponent/Todos';
import Footer from './Mycomponent/Footer';
import AddTodo from './Mycomponent/AddTodo';
import { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log('onDelete triggered', todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }
    ));
  }
  const addTodo = (title, desc) => {
    let sno = todos[todos.length - 1].sno + 1
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, newTodo]);
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to gym1",
      desc: "You need to go the the gym"
    },
    {
      sno: 2,
      title: "Go to gym2",
      desc: "You need to go the the gym"
    },
    {
      sno: 3,
      title: "Go to gym3",
      desc: "You need to go the the gym"
    }
  ]);
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
