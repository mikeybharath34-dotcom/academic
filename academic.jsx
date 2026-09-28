
import "./Aca.css";

function Student({ name, department, year }) {
  return (
    <div className="student-info">
      <h2>Hello {name} 👋</h2>
      <p>Department: {department}</p>
      <p>Year: {year}</p>
    </div>
  );
}

function Subject({ name }) {
  return <div className="subject">📖 {name}</div>;
}

function Status({ cgpa, attendance }) {
  const eligible = cgpa >= 7.5 && attendance >= 75;

  return (
    <div className="status">
      <h2>📊 Current Status</h2>
      <p>CGPA: {cgpa}</p>
      <p>Attendance: {attendance}%</p>
      <h3>{eligible ? "✅ Placement Eligible" : "❌ Not Eligible"}</h3>
    </div>
  );
}

function App() {
  const students = [
    {
      name: "Sree Shanth",
      department: "AI & Data Science",
      year: "2nd Year",
      cgpa: 8.1,
      attendance: 82,
    },
    {
      name: "Rahul",
      department: "Computer Science",
      year: "2nd Year",
      cgpa: 7.2,
      attendance: 78,
    },
  ];

  const subjects = ["Java", "DBMS", "React", "Data Science"];

  return (
    <div className="academic">
      <h1>🎓 My Academic Check</h1>

      {students.map((student) => (
        <div className="student-card" key={student.name}>
          <Student
            name={student.name}
            department={student.department}
            year={student.year}
          />

          <div className="subjects">
            <h2>📚 My Subjects</h2>

            {subjects.map((subject) => (
              <Subject key={subject} name={subject} />
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

export default App;

