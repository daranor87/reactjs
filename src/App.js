import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './styles/styles.scss' 
import Curso from './Curso'

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
      <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
          <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" alt="" src="https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">Curso de React js</p>
              <p>Es el primer curso desde cero que hago</p>
              <a href="link.html" className="button">Sucribirse</a>
            </div>
          </div>
        </div>
      </div>
      <div className="ed-grid m-grid-3">
        {
          cursos.map( c => <Curso tituloCurso={c.tituloCurso} imagenCurso={ c.imagenCurso } imageProfesorCurso={c.imageProfesorCurso} precio={ c.precio }  />)
        }
      </div>
    </>
  );
}

export default App;
