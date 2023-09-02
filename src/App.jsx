import React from 'react';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard'
import './App.css'

export default function App() {

  return (
    <>
      <div className="app-container">
        {/* Nav component that pops out when you click a hamburger menu icon */}
        <Nav />
        {/* Dashboard component that contains the other workering graphs as other components */}
        <Dashboard />
      </div>
    </>
  )
}

