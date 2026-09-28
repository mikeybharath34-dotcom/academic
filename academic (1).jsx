import Student from "./Student.jsx";
import Subject from "./Subject.jsx";
import Status from "./Status.jsx";
import "./App.css";

function Academic() {

  const students = [
    {
      name: "Sree Shanth",
      department: "AI & Data Science",
      year: "2nd Year",
      cgpa: 8.1,
      attendance: 82
    },
    {
      name: "Rahul",
      department: "Computer Science",
      year: "2nd Year",
      cgpa: 7.2,
      attendance: 78
    }
  ];

  const subjects = ["Java", "DBMS", "React", "Data Science"];

  return (
    <div className="academic">

      <h1 style={{color:"black"}}>🎓 My Academic Check</h1>

      {students.map((student) => (

        <div className="student-card" key={student.name}>

          <Student
            name={student.name}
            department={student.department}
            year={student.year}
          />

          <div className="subjects">

            <h2 style={{color:"black"}}>📚 My Subjects</h2>

            {subjects.map((subject) => (
              <Subject
                key={subject}
                name={subject}
              />
            ))}

          </div>

          <Status
            cgpa={student.cgpa}
            attendance={student.attendance}
          />

        </div>

      ))}

    </div>
  );
}

export default Academic;