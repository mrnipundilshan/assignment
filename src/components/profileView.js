import '../assets/css/compo.css'

export default function ProfileView({ selectedStudent }) {
  
    return (
      <div className="rightDiv">
        {selectedStudent && (
          <>
            <table border='2' className="tableStyle">
              <tbody>
                  <tr>
                    <td rowSpan={8} >
                      <img className="profile"
                        src={require(`../assets/profilepic/${selectedStudent.profilePic}`)}
                        alt="Profile"
                      />
                    </td>
                    <td><p><strong>ID:</strong> {selectedStudent.studentId}</p></td>
                  </tr>
                  <tr>
                    <td><p><strong>Full Name:</strong> {selectedStudent.firstName} {selectedStudent.lastName}</p></td>
                  </tr>
                  <tr>
                    <td><p><strong>Age:</strong> {selectedStudent.age}</p></td>
                  </tr>
                  <tr>
                    <td><p><strong>Course:</strong> {selectedStudent.course}</p></td>
                  </tr>
                  <tr>
                     <td><p><strong>Gender:</strong> {selectedStudent.gender}</p></td>
                  </tr>
                  <tr>
                     <td><p><strong>Address:</strong> {selectedStudent.address.city} {selectedStudent.address.country}</p></td>
                  </tr>
                  <tr>
                    <td><p><strong>Skills:</strong> {selectedStudent.skills.join(', ')}</p></td>
                  </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    );
}