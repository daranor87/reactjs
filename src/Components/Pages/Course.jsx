import React, { Component } from 'react';
import CourseGrid from '../Organisms/CourseGrid';
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
        return <CourseGrid cursos={ cursos } />
    }
}

export default Course