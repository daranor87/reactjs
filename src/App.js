import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from './logo.svg';
//import './App.css';
import './styles/styles.scss'; 
import Curso from './Curso';
import Banner from './Banner';
import Formulario from './Formulario';
import CursoGrid from './CursoGrid';
import CursoInt from './CursoInt';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Banner } />
        <Route path="/cursos/:id" component={ CursoInt } />
        <Route path="/cursos" component={ CursoGrid } />
        <Route path="/formulario" component={ () => <Formulario name="Contacto"  /> } />
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
