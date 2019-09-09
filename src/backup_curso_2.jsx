import React from 'react';

const curso = {
    "tituloCurso": "Curso de React desde cero",
    "imagenCurso" : "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/AfterEffectsDesdeCero.png",
    "imageProfesorCurso" : "https://api.ed.team/files/avatars/66813820-2857-4af9-b84f-9196acbb832e.jpg",
    "precio" : "100.00"
}

const persona = {"nombre": "Alberto", "apellido": "Quiroga", "edad": 29}

const Curso = () => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={curso.imagenCurso} alt={curso.imagenCurso} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
               { curso.tituloCurso }
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src={curso.imageProfesorCurso} alt={ `Profesor del ` + curso.tituloCurso } />
                        </div>
                    </div>
                    <span className="small">{`${persona.nombre} ${persona.apellido}`}</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="#">$ {curso.precio}</a>
            </div>
        </div>
    </article>
)

export default Curso;