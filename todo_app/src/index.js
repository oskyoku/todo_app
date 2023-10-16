import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ToDoList from './routes/todolist';
import CheckList from './routes/checklist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='todolist' element={<ToDoList />} />
        <Route path='checklist' element={<CheckList />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
