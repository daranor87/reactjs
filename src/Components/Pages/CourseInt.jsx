import React from 'react'

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

const CourseInt = ({match}) => {

    const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0];
    return (
        <div className="ed-grid m-grid-3">
            {
                cursoActual ? 
                (
                    <>
                        <h1 className="n-cols-3">Curso: {cursoActual.tituloCurso}</h1>
                        <img className="m-cols-1" src={cursoActual.imagenCurso} alt={cursoActual.tituloCurso}/>
                        <p className="m-cols-2">Profesor: {cursoActual.profesor}</p>
                    </>
                ) :
                (
                    <h1>
                        No se encontro la página
                    </h1>
                )
            }
        </div>
        
    )
}

export default CourseInt


/*class CourseInt extends Component {

    constructor(props){
        super(props)
        this.state = {
            cursoActual: {}
        }
    }

    componentDidMount(){
        axios.get(`http://my-json-server.typicode.com/daranor87/json-db/cursos/${this.props.match.params.id}`)
        .then(resp => 
                {
                    this.setState({
                        cursoActual: resp.data
                    })
                }
            )
    }
    render(){
        return (
            <div className="ed-grid m-grid-3">
                {
                    this.state.cursoActual ? 
                    (
                        <>
                            <h1 className="n-cols-3">Curso: {this.state.cursoActual.tituloCurso}</h1>
                            <img className="m-cols-1" src={this.state.cursoActual.imagenCurso} alt={this.state.cursoActual.tituloCurso}/>
                            <p className="m-cols-2">Profesor: {this.state.cursoActual.profesor}</p>
                        </>
                    ) :
                    (
                        <h1>
                            No se encontro la página
                        </h1>
                    )
                }
            </div>
        )
    }
}

export default CourseInt */