// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="App">
      
    
    
    <Router>
        <Routes>
          <Route path="/" element={<LoginPage setAuthenticated={setAuthenticated} authenticated={authenticated} />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute authenticated={authenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
