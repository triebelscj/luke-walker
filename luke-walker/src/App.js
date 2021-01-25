import React from 'react'
import './App.css';

// When working with { Router } => you must give a path attribute to the items inside the <Router> tags. Otherewise it will throw a "Cannot find Mudule" bullshit. 
import { Router } from '@reach/router';

// Bring in Components
import Home from './components/home'
import People from './components/people'
import Planets from './components/planets'

function App() {


  return (
    <div className="App" style={{ backgroundColor: '#1A2E3B ', height: "100vh", paddingTop: '40px' }}>
      <Router>
        {/* This is where you cannot forget to ADD the PATHS to the components below. It will throw that shitty little "CAN'T find modules bullshit" */}
        <Home path="/" />
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
      </Router>
    </div >
  );
}

export default App;
