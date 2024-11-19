import '../assets/css/compo.css'

export default function StuDataTable({ students, handleViewProfile }) {
  
    return (
      <div className="leftDiv">
        <table border='2' className="tableStyle">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Course</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.course}</td>
                <td>{student.address.country}</td>
                <td>
                  <button onClick={() => handleViewProfile(student)}>
                    View Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}