import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import React from 'react'
import './App.css';
import Dashboard from './Dashboard';
import { UserContextProvider } from './contexts/user';

function App() {
  return (
  
  <Router >
    <UserContextProvider>
    <Route path="/" component={Dashboard}>
        <Dashboard/>
      </Route>
    </UserContextProvider>      
  </Router>
  );
}

export default App;
