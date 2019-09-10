import React from 'react';
import PropTypes from 'prop-types';

//const persona = {"nombre": "Alberto", "apellido": "Quiroga", "edad": 29}
//const Curso = props => (
//props.tituloCurso
const Curso = ({tituloCurso, imagenCurso, profesor, imageProfesorCurso, precio}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={imagenCurso} alt={tituloCurso} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
               { tituloCurso }
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src={imageProfesorCurso} alt={ `Profesor del ` + tituloCurso } />
                        </div>
                    </div>
                    <span className="small">{profesor}</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="#">$ {precio}</a>
            </div>
        </div>
    </article>
)

Curso.propTypes = {
    tituloCurso: PropTypes.string,
    imagenCurso: PropTypes.string,
    imageProfesorCurso: PropTypes.string,
    precio: PropTypes.string,
    profesor: PropTypes.string,
}
Curso.defaultProps = {
    tituloCurso: "No se encontro un título",
    imagenCurso: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1200px-Flag_of_Peru.svg.png",
    imageProfesorCurso: "https://api.ed.team/files/avatars/66813820-2857-4af9-b84f-9196acbb832e.jpg",
    precio: "---",
    profesor: "Norwin Davila",
}

export default Curso;