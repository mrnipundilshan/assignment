import "./App.css";
import './assets/css/compo.css'
import React, { useState } from 'react';
import { students as studentsData } from "./assets/StudentsDb";
import StuDataTable from "./components/stuDataTable";
import ProfileView from "./components/profileView";

function App() {
  const [selectedStudent, setSelectedStudent] = useState(studentsData[0]);
  const [fontSize, setFontSize] = useState('medium');

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  const handleViewProfile = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div>
      <h1 className="title">Student Information Portal</h1>

      <div className="font-selector">
        <hr/>
        <p>Change font size :  
        <button onClick={() => handleFontSizeChange('small')}>Small</button>
        <button onClick={() => handleFontSizeChange('medium')}>Medium</button>
        <button onClick={() => handleFontSizeChange('large')}>Large</button> </p>
        <hr/>
      </div>

      <div className={`outerDiv ${fontSize}`}>
        <StuDataTable students={studentsData} handleViewProfile={handleViewProfile} />
        <ProfileView selectedStudent={selectedStudent} />
      </div>
    </div>
  );
}

export default App;
