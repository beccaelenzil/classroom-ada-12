import React from 'react';
import Student from './Student'

const StudentCollection = (props) => {

  const studentElements = props.people.map((student, i) =>{
      return (
          <Student fullName={student.fullName} present={student.present} id={student.id} class={student.class} email={student.email} key={i} onUpdateStudent={props.updateStudentCallback} onDeleteStudent={props.deleteStudentCallback}/>
      )
    }
  )

  return(
    <div>{studentElements}</div>
  );
}

export default StudentCollection;