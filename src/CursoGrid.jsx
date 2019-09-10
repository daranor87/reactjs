import React from 'react';
import Curso from './Curso';

const cursos = [
    {
        "id": 1,
        "tituloCurso": "Curso de React desde cero",
        "imagenCurso": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/AfterEffectsDesdeCero.png",
        "imageProfesorCurso": "https://api.ed.team/files/avatars/66813820-2857-4af9-b84f-9196acbb832e.jpg",
        "profesor" : "Norwin Davila",
        "precio": "100.00"
    },
    {
        "id": 2,
        "tituloCurso": "Curso de PHP desde cero",
        "imagenCurso": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2018-10/php%20desde%20cero.jpg",
        "imageProfesorCurso": "https://api.ed.team/files/avatars/66813820-2857-4af9-b84f-9196acbb832e.jpg",
        "profesor" : "Almendra del Campo",
        "precio": "50.00"
    },
    {
        "id": 3,
        "tituloCurso": "Curso de GO desde cero",
        "imagenCurso": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
        "imageProfesorCurso": "https://api.ed.team/files/avatars/66813820-2857-4af9-b84f-9196acbb832e.jpg",
        "profesor" : "Alvaro Felipe",
        "precio": "80.00"
    },
    {
        "id": 4,
        "tituloCurso": "Curso de creación api con php desde cero",
        "imagenCurso": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/firebase-android.png",
        "imageProfesorCurso": "https://api.ed.team/files/avatars/66813820-2857-4af9-b84f-9196acbb832e.jpg",
        "profesor" : "Dick Torres",
        "precio": "120.00"
    }
  ]

const CursoGrid = () => (
    <div className="ed-grid m-grid-4">
        { cursos.map(c => (
        <Curso 
            key={c.id}
            id={c.id}
            tituloCurso = {c.tituloCurso}
            imagenCurso = {c.imagenCurso}
            profesor = {c.profesor}
            imageProfesorCurso = {c.imageProfesorCurso}
            precio = {c.precio}
        />
        ) ) }
    </div>
)

export default CursoGrid