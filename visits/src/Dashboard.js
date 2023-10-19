import React, { useState } from 'react';
import './Dashboard.css';
import backgroundVideo from './v.mp4';
function Dashboard() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showITEmployees, setShowITEmployees] = useState(false);
  const [showInternes, setShowInternes] = useState(false);
 
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setUploadedImage(null);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUploadedImage(imageURL);
    }
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
      {showITEmployees && <EmployeeGroup members={employees[0].members} handleImageClick={handleImageClick} />}
      <h2 onClick={toggleInternes}>Internes</h2>
      <hr />
      {showInternes && <EmployeeGroup members={employees[1].members} handleImageClick={handleImageClick} />}
      {employees.slice(2).map((employeeGroup, groupIndex) => (
        <div key={groupIndex}>
          <h2>{employeeGroup.group}</h2>
          <hr />
          <EmployeeGroup members={employeeGroup.members} handleImageClick={handleImageClick} />
        </div>
      ))}
      {selectedImage && (
        <ImageModal selectedImage={selectedImage} uploadedImage={uploadedImage} handleImageUpload={handleImageUpload} closeImageModal={closeImageModal} />
      )}
    </div>
  );
}

function EmployeeGroup({ members, handleImageClick }) {
  return (
    <div className="members">
      {members.map((employee, index) => (
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
  );
}

function ImageModal({ selectedImage, uploadedImage, handleImageUpload, closeImageModal }) {
  return (
    <div className="image-modal" onClick={closeImageModal}>
    
      <video autoPlay loop muted id="background-video">
      <source src={backgroundVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
     
    </div>
  );
}

export default Dashboard;
