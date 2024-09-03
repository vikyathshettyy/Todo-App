import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';


function App() {
  const headStyle = {
    textAlign: "center",
  }
  return (
    <div>
      <h1>Devops project by Vikyath Shetty by fis</h1>
      <br></br>
      <br></br>
      <br></br>

      <h1 style={headStyle}>Todo List</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todo/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;