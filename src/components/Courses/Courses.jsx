import { useEffect } from "react";
import { useState } from "react"
import Course from "../Course/Course";
import PropTypes from 'prop-types';

export default function Courses({handaleSelect, selectedCourseId}) {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))

    },[])
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {
            courses.map((course) => <Course key={course.id} course={course} handaleSelect={handaleSelect} selectedCourseId={selectedCourseId}></Course>)
        }
    </div>
  )
}

Courses.propTypes = {
    handaleSelect: PropTypes.func.isRequired
}
