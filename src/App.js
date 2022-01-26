
import './App.css';
import {useEffect, useState} from "react";
import ButtonAppBar from './mui/Navbar';
import {TodoList } from './mui/TodoList';



function App() {
  return (
    <>
      <ButtonAppBar/>
      <TodoList/>
    </>
  );
}

export default App;
