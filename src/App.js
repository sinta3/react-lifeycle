import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import './App.css';
import Github from './page/Github/Github'

function App() {
  return (
   <Router>
    
      <Route exact path="/">
        <Github/>
      </Route>

   
   </Router>
  );
}

export default App;
