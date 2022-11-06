import React, { useEffect } from 'react';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import {Home, Project, Contact, AppLayout} from './layouts';

function App() {

  useEffect(() => {
    document.title = "Jason's Personal Website"
  })
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='project' element={<Project/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
