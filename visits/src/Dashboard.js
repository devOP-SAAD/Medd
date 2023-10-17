// Dashboard.js
import React from 'react';
import { Typography } from '@mui/material';

/* Google Font link should be placed in the HTML file, not in JavaScript. Remove the @import. */

/* Remove font-family and other styles for * selector to avoid global overrides */

/* You should use className instead of class for assigning CSS classes in JSX */

/* Add an alt attribute to img tags for better accessibility */

/* The <Typography> component is imported but not used in the code. You can remove it if not needed. */

import './Dashboard.css'; // You can create a separate CSS file for styles

function Dashboard() {
  return (
    <div className="main-container">
      <h2>Internes</h2>
      <hr />
      <div className="members">
        <div className="team-member">
          <img src="./s.jpg" alt="John Doe" />
          <h4>Saad</h4>
          <p>React Developer</p>
        </div>
        <div className="team-member">
          <img src="./r.jpeg" alt="John Doe" />
          <h4>Raja Hassan</h4>
          <p>React Developer</p>
        </div>
        <div className="team-member">
          <img src="./w.jpeg" alt="John Doe" />
          <h4>Wasiq Ishtiaq</h4>
          <p>.Net Developer</p>
        </div>
        <div className="team-member">
          <img src="./k.png" alt="John Doe" />
          <h4>Kamran Ali</h4>
          <p>Mobile Developer</p>
        </div>

        <div className="team-member">
          <img src="./5.png" alt="John Doe" />
          <h4>Tayyaba</h4>
          <p>ASP.Net Developer</p>
        </div>
        <div className="team-member">
          <img src="./5.png" alt="John Doe" />
          <h4>Sidra</h4>
          <p>Angular Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
