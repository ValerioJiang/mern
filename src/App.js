import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar.component";
import ExcerciseList from "./components/excercise-list.component";
import EditExcercise from "./components/edit-excercise.component";
import CreateExcercise from "./components/create-excercise.component";
import CreateUser from "./components/create-user.component";
import Logout from "./components/logout.component";

function App() {
  return (
    <Router>
      <Container fluid>
        <Navbar />
        <br />
        <Route path="/" exact component={ExcerciseList} />
        <Route path="/edit/:id" component={EditExcercise} />
        <Route path="/create" component={CreateExcercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/logout" component={Logout} />
      </Container>
    </Router>
  );
}

export default App;
