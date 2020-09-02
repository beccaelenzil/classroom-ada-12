import PropTypes from 'prop-types'
import React, { useState } from 'react';


const Student = (props) => {
  //const [present, setPresent] = useState(false);
  //const [fullName, setName] = useState(props.fullName);

  const onDeleteClick = () => {
    console.log("delete")
    props.onDeleteStudent(props.id)
  }
  
  const onButtonClick = () => {
    const updatedStudent = {
      fullName: props.fullName,
      birthday: props.birthday,
      email: props.email,
      class: props.class,
      // Toggle present to a new value
      present: !props.present,
      id: props.id,
    }

    // call the function passed from `App`
    props.onUpdateStudent(updatedStudent);
  }

  const onFullNameInputChange = (event) => {
    const updatedStudent = {
      fullName: event.target.value,
      birthday: props.birthday,
      email: props.email,
      class: props.class,
      present: props.present,
      id: props.id,
    }

    // call the function passed from `App`
    props.onUpdateStudent(updatedStudent);
  };
  

  return(
  <li className={props.class} key={props.key}>
    <h3 className={props.present ? "present" : "absent"}>{props.fullName}</h3>
    <input value={props.fullName} onChange={onFullNameInputChange} />
    <p>{props.email}</p>
    <button onClick={onButtonClick}>Mark {props.present ? 'Absent' : 'Present'} </button>
    <button onClick={onDeleteClick}>Delete</button>
  </li>
  
  );
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  class: PropTypes.string,
  id: PropTypes.number,
  onDeleteClick: PropTypes.func
};

export default Student;

