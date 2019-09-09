import React from 'react';

const mayorDeEdad = edad => edad > 18;
const persona = {"nombre": "Alberto", "apellido": "Quiroga", "edad": 29}

const Curso = () => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/AfterEffectsDesdeCero.png" alt="" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
               { persona.nombre }  {`Hola me llamo ${persona.nombre} y tengo ${persona.edad } `}<br />
            </h3>
            {mayorDeEdad(persona.edad) ? "Soy mayor de edad" : "Soy menor" }
            {
                mayorDeEdad(persona.edad)
                    ? <div className="soymayor">
                        <h3>Soy mayor de edad</h3>
                    </div>
                    : <p>Soy menor</p>
            }
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src="https://api.ed.team/files/avatars/66813820-2857-4af9-b84f-9196acbb832e.jpg" alt="" />
                        </div>
                    </div>
                    <span className="small">{`${persona.nombre} ${persona.apellido}`}</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="#">$ 20USD</a>
            </div>
        </div>
    </article>
)

export default Curso;