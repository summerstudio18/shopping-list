import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { TodoWrapper } from './components/TodoWrapper';
import CompletedItems from './components/CompletedItems';
import { useState, useEffect } from 'react';
import logo from './assets/logo.gif';

function App() {
  // Initialize todos state with local storage data or an empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  // Save todos to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">On the Shelf</NavLink>
            </li>
            <li>
              <NavLink to="/completed" activeClassName="active">In the Cart</NavLink>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route exact path="/" element={<TodoWrapper todos={todos} setTodos={setTodos} />} />
          <Route path="/completed" element={<CompletedItems todos={todos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
