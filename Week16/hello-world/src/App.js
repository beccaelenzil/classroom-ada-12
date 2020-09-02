import React, {useState} from 'react';
import StudentCollection from './components/StudentCollection'
import './App.css';

const students = [
  { fullName: 'Devin', email: 'dmoney@g.mail', class: 'instructor', id: 1},
  { fullName:'Becca', email: 'bmoney@g.mail', class: 'instructor', id: 2},
  { fullName: 'Dee', email: 'dee@dee.dee', class: 'instructor', id: 3},
  { fullName: 'Leah', email: 'lmoney@g.com', class: 'space', id: 4},
  { fullName: 'Emily', email: 'emoney@g.com', class: 'time', id: 5}
]

function App() {
  const [studentList, setStudentList] = useState(students);  

  const updateStudent = (updatedStudent) => {
    const students = [];
    studentList.forEach((student) => {
      if (student.id === updatedStudent.id) {
        students.push(updatedStudent);
      } else {
        students.push(student);
      }  
  })
  setStudentList(students)
  };

  const deleteStudent = (id) => {
    const students = []
    studentList.forEach((student) => {
      if (student.id !== id) {
        student.fullName = "hello world"
        students.push(student);
      }   
     })
     setStudentList(students)
    };



  return (
    <div className="App">
      <header className="App-header">
        <StudentCollection people={studentList} updateStudentCallback={updateStudent} deleteStudentCallback={deleteStudent}/>
        <img src="https://adadevelopersacademy.org/wp-content/uploads/2019/08/logo.png" className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
