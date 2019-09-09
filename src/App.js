import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './styles/styles.scss'; 
import Curso from './Curso';
import Banner from './Banner';
import Formulario from './Formulario';

const cursos = [
  {
    "tituloCurso": "Curso de React desde cero",
    "imagenCurso": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/AfterEffectsDesdeCero.png",
    "imageProfesorCurso": "https://api.ed.team/files/avatars/66813820-2857-4af9-b84f-9196acbb832e.jpg",
    "precio": "100.00"
  },
  {
    "tituloCurso": "Curso de PHP desde cero",
    "imagenCurso": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2018-10/php%20desde%20cero.jpg",
    "imageProfesorCurso": "https://api.ed.team/files/avatars/66813820-2857-4af9-b84f-9196acbb832e.jpg",
    "precio": "50.00"
  },
  {
    "tituloCurso": "Curso de GO desde cero",
    "imagenCurso": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
    "imageProfesorCurso": "https://api.ed.team/files/avatars/66813820-2857-4af9-b84f-9196acbb832e.jpg",
    "precio": "80.00"
  },
  {
    "tituloCurso": "Curso de creación api con php desde cero",
    "imagenCurso": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/firebase-android.png",
    "imageProfesorCurso": "https://api.ed.team/files/avatars/66813820-2857-4af9-b84f-9196acbb832e.jpg",
    "precio": "120.00"
  }
]

function App() {
  return (
    <>
      <Banner />
      <Formulario name="LEAD" />
      <div className="ed-grid m-grid-3">
        {
          cursos.map( c => <Curso tituloCurso={c.tituloCurso} imagenCurso={ c.imagenCurso } imageProfesorCurso={c.imageProfesorCurso} precio={ c.precio }  />)
        }
      </div>
    </>
  );
}

export default App;
