import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Link } from '@mui/material';

function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Handle signup logic by adding the formData to the list of registered users.
      setRegisteredUsers([...registeredUsers, formData]);
      console.log('Signup data:', formData);
      alert('Signup successful. Please login.');

      // Reset the form fields
      setFormData({
        fullName: '',
        email: '',
        password: '',
      });
    } else {
      // Handle login logic by checking if the entered data matches any registered user.
      const matchingUser = registeredUsers.find(
        (user) => user.email === formData.email && user.password === formData.password
      );
      if (matchingUser) {
        console.log('Login data:', formData);
        alert('Login successful.');
      } else {
        console.log('Login data:', formData);
        alert('Incorrect email or password. Please try again.');
      }
    }
  };

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <Grid container xs={12} lg={12} justify="center" alignItems="center" style={{ height: '650px' }}>
      <Grid xs={12} md={6} lg={6}>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }} onSubmit={handleSubmit}>
          <TextField
            label={isSignUp ? "Full Name" : "Email"}
            required
            name={isSignUp ? "fullName" : "email"}
            value={formData[isSignUp ? "fullName" : "email"]}
            onChange={handleChange}
            style={{ width: '100%', maxWidth: '400px', margin: '10px' }}
          />
          {isSignUp && (
            <TextField
              label="Email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', maxWidth: '400px', margin: '10px' }}
            />
          )}
          <TextField
            type="password"
            label={isSignUp ? "Create Password" : "Password"}
            required
            name={isSignUp ? "password" : "password"}
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', maxWidth: '400px', margin: '10px' }}
          />
          <div style={{ marginTop: '20px', width: '100%', maxWidth: '400px' }}>
            <Button type="submit" variant="contained" color="primary" style={{ width: '100%', borderRadius: '30px' }}>
              {isSignUp ? "Sign up" : "Login"}
            </Button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            {isSignUp ? (
              <Link onClick={toggleSignUp} style={{ color: 'blue' }}>Back to Login</Link>
            ) : (
              <Link onClick={toggleSignUp} style={{ color: 'blue' }}>Sign up</Link>
            )}
          </div>
        </form>
      </Grid>
      <Grid xs={12} lg={6} style={{ background: '#01619B' }}>
        <Grid container style={centerStyle}>
          <Typography>
            <span style={{ fontSize: '30px', color: 'white', fontFamily: 'serif', fontWeight: 'bold' }}>Welcome to the <br />MEDIREMOTE</span><br /><br />
            <span style={{ color: 'white' }}>A Brand Of E-HealthCare System and <br /> Wireless Communications. Current and <br />
              Future Challenges</span><br />
            <span style={{ color: 'white' }}>copyright @ 2023 MEDIREMOTE. All Rights Reserved</span>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
