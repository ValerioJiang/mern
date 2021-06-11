import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import Navbar from './components/navbar.component'
import ExcerciseList from './components/excercises-list.component'
import EditExcercise from './components/edit-excercise.component'
import CreateExcercise from './components/create-excercise.component'
import CreateUser from './components/create-user.component'

function App() {
  return (
    <Router>
      <Navbar>
        <br/>
        <Route path="/" exact component={ExcerciseList} />
        <Route path="/edit/:id" component={EditExcercise} />
        <Route path="/create" exact component={CreateExcercise} />
        <Route path="/user" exact component={CreateUser} />

      </Navbar>
    </Router>
  );
}

export default App;
