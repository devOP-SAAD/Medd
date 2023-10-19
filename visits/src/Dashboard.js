// Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };


  const [selectedContent, setSelectedContent] = useState(null);

  const handleContentClick = (content) => {
    setSelectedContent(content);
  };

  const closeContentModal = () => {
    setSelectedContent(null);
  };
  return (
    <div className="main-container">
      <h2>Internes</h2>
      <hr />
      <div className="members">
        <div className="team-member" onClick={() => handleImageClick('./s.jpg')}>
          <img src="./s.jpg" alt="John Doe" />
          <h4>Saad</h4>
          <p>React Developer</p>
        </div>
        <div className="team-member" onClick={() => handleImageClick('./r.jpeg')}>
          <img src="./r.jpeg" alt="John Doe" />
          <h4>Raja Hassan</h4>
          <p>React Developer</p>
        </div>
        <div className="team-member" onClick={() => handleImageClick('./w.jpeg')}>
          <img src="./w.jpeg" alt="John Doe" />
          <h4>Wasiq Ishtiaq</h4>
          <p>.Net Developer</p>
        </div>
        <div className="team-member" onClick={() => handleImageClick('./k.png')}>
          <img src="./k.png" alt="John Doe" />
          <h4>Kamran Ali</h4>
          <p>Mobile Developer</p>
        </div>
        <div className="team-member" onClick={() => handleImageClick('./5.png')}>
          <img src="./5.png" alt="John Doe" />
          <h4>Tayyaba</h4>
          <p>ASP.Net Developer</p>
        </div>
        <div className="team-member" onClick={() => handleImageClick('./5.png')}>
          <img src="./5.png" alt="John Doe" />
          <h4>Sidra</h4>
          <p>Angular Developer</p>
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected Image" />
           
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
