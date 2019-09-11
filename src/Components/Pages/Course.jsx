import React, { Component } from 'react';
import CourseCard from '../Molecules/CourseCard';
import axios from 'axios';

class Course extends Component{
    constructor(props){
        super(props)

        this.state = {
            cursos: []
        }
    }
    componentDidMount(){
        axios.get('http://my-json-server.typicode.com/daranor87/json-db/cursos')
        .then(resp => {
            this.setState({
                cursos: resp.data
            })
        })
    }
    render(){
        const { cursos } = this.state
        return(
            <div className="ed-grid m-grid-4">
                { cursos.length === 0
                    ?   <h1 className="t3">Cargando...</h1>
                    :   cursos.map(c => (
                        <CourseCard
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
    }
}

export default Course