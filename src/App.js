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
import MainMenu from './MainMenu';
import Historial from './Historial';

function App() {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component={ Banner } />
        <Route path="/cursos/:id" component={ CursoInt } />
        <Route path="/cursos" component={ CursoGrid } />
        <Route path="/historial/:valor" component={ Historial} />
        <Route path="/historial" component={ Historial} />
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
