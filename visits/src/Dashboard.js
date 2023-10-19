// Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showITEmployees, setShowITEmployees] = useState(false);
  const [showInternes, setShowInternes] = useState(false); // Add this state

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const employees = [
    {
      group: "IT Employees",
      members: [
        {
          name: "Faseeh Haider",
          role: "Team Lead",
          imageSrc: "./5.png",
        },
        {
          name: "Taqi Ali",
          role: "React Developer",
          imageSrc: "./5.png",
        },
        // Add more IT employees here
      ],
    },
    {
      group: "Internes",
      members: [
        {
          name: "Saad",
          role: "React Developer",
          imageSrc: "./s.jpg",
        },
        {
          name: "Raja Hassan",
          role: "React Developer",
          imageSrc: "./r.jpeg",
        },
        {
          name: "Wasiq Ishtiaq",
          role: ".Net Developer",
          imageSrc: "./w.jpeg",
        },
        {
          name: "Kamran Ali",
          role: "Mobile Developer",
          imageSrc: "./k.png",
        },
        // Add more Internes here
      ],
    },
    // Add more employee groups here
  ];

  const toggleITEmployees = () => {
    setShowITEmployees(!showITEmployees);
  };

  const toggleInternes = () => {
    setShowInternes(!showInternes);
  };

  return (
    <div className="main-container">
      <h2 onClick={toggleITEmployees}>IT Team</h2>
      <hr />
      {showITEmployees && (
        <div className="members">
          {employees[0].members.map((employee, index) => (
            <div
              key={index}
              className="team-member"
              onClick={() => handleImageClick(employee.imageSrc)}
            >
              <img src={employee.imageSrc} alt={employee.name} />
              <h4>{employee.name}</h4>
              <p>{employee.role}</p>
            </div>
          ))}
        </div>
      )}

      <h2 onClick={toggleInternes}>Internes</h2> {/* Clicking this heading toggles Internes */}
      <hr />
      {showInternes && (
        <div className="members">
          {employees[1].members.map((employee, index) => (
            <div
              key={index}
              className="team-member"
              onClick={() => handleImageClick(employee.imageSrc)}>
              <img src={employee.imageSrc} alt={employee.name} />
              <h4>{employee.name}</h4>
              <p>{employee.role}</p>
            </div>
          ))}
        </div>
      )}
      {employees.slice(2).map((employeeGroup, groupIndex) => (
        <div key={groupIndex}>
          <h2>{employeeGroup.group}</h2>
          <hr />
          <div className="members">
            {employeeGroup.members.map((employee, index) => (
              <div
                key={index}
                className="team-member"
                onClick={() => handleImageClick(employee.imageSrc)}
              >
                <img src={employee.imageSrc} alt={employee.name} />
                <h4>{employee.name}</h4>
                <p>{employee.role}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected Image" className="image-transition" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
