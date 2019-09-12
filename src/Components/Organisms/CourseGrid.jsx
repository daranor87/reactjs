import React from 'react';
import CourseCard from '../Molecules/CourseCard';
import withLoader from '../HOC/withLoader';

const CourseGrid = ({ cursos }) => (
    <div className="ed-grid m-grid-4">
        {
            cursos.map(c => (
                <CourseCard
                    key={c.id}
                    id={c.id}
                    tituloCurso={c.tituloCurso}
                    imagenCurso={c.imagenCurso}
                    profesor={c.profesor}
                    imageProfesorCurso={c.imageProfesorCurso}
                    precio={c.precio}
                />
            )) 
        }
    </div>
)

export default withLoader("cursos") (CourseGrid)