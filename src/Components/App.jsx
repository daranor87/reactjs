import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from './logo.svg';
//import './App.css';
import '../styles/styles.scss'; 
import Home from './Pages/Home';
import Form from './Pages/Form';
import Course from './Pages/Course';
import CourseInt from './Pages/CourseInt';
import History from './Pages/History';
import Users from './Pages/Users';
import MainMenu from './Templates/MainMenu';


function App() {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/cursos/:id" component={ CourseInt } />
        <Route path="/cursos" component={ Course } />
        <Route path="/historial/:valor" component={ History } />
        <Route path="/historial" component={ History } />
        <Route path="/usuarios" component={ Users } />
        <Route path="/formulario" component={ () => <Form name="Contacto"  /> } />
        <Route component={() => (
          <div className="ed-grid">
            <h1>Error 404</h1>
            <p>Página no encontrado</p>
          </div>
        )} />
      </Switch>
    </Router>
  );
}

export default App;
