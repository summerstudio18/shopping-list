import React from "react";
import { Link } from "react-router-dom";
import cart from "../assets/cart.png";

const CompletedItems = ({ todos }) => {
  return (
    <div className="TodoWrapper">
      <h1>What's in your shopping cart?</h1>
      <img src={cart} className="App-logo" alt="cart" />
      <div className="completedlist">
        <ul>
      {todos.filter((todo) => todo.completed).map((todo) => (
          <li>
          <div key={todo.id}>
            <span>{todo.task}</span>
          </div>
          </li>
        ))}
        
        </ul>
        </div>
      <Link to="/"><button className='todo-btn'>Go Back</button></Link>
    </div>
  );
};


export default CompletedItems;
