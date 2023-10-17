// src/App.js
import React from 'react';
import Dashboard from './Dashboard';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      

<Router>
<Routes>
<Route path="/" element={<Login/>}/>
<Route path="/Dashboard" element={<Dashboard/>}/>
</Routes>
</Router>


    </div>
  );
}

export default App;
