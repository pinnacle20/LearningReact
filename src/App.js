import logo from './logo.svg';
import './App.css';
import Header from './Mycomponent/Header';
import Todos from './Mycomponent/Todos';
import Footer from './Mycomponent/Footer';
import AddTodo from './Mycomponent/AddTodo';
import About from './Mycomponent/About';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
      <Router>
        <Header title="Ciao!" />

        <Routes>
          <Route exact path='/' element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Home" element={<About />} />

        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
