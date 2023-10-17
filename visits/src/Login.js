import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Link } from '@mui/material'; // Import Material-UI components
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton'; // Import Material-UI components
import InputAdornment from '@mui/material/InputAdornment'; // Import Material-UI components
import VisibilityIcon from '@mui/icons-material/Visibility'; // Import Material-UI components
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; // Import Material-UI components

function LoginPage() {
  // State variables
  const [isSignUp, setIsSignUp] = useState(false); // Tracks whether the user is signing up or logging in
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  }); // Stores user input data
  const [registeredUsers, setRegisteredUsers] = useState([]); // Stores registered users
  const navigate = useNavigate(); // Helps with navigation in React Router

  // Function to toggle between sign-up and login forms
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };



  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission (either sign-up or login)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Handle signup logic by adding the formData to the list of registered users
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
      // Handle login logic by checking if the entered data matches any registered user
      const matchingUser = registeredUsers.find(
        (user) => user.email === formData.email && user.password === formData.password
      );
      if (matchingUser) {
        console.log('Login data:', formData);
        navigate('/Dashboard'); // Navigate to the dashboard page upon successful login
      } else {
        console.log('Login data:', formData);
        alert('Incorrect email or password. Please try again.');
      }
    }
  };

  // Styling for centering the form
  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <Grid container xs={12} lg={12} justifyContent="center" alignItems="center" style={{ height: '650px' }}>
      <Grid xs={12} md={6} lg={6}>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }} onSubmit={handleSubmit}>
          <TextField
            label={isSignUp ? "Full Name" : "Email"} // Conditional label based on sign-up or login
            required
            name={isSignUp ? "fullName" : "email"} // Conditional name based on sign-up or login
            value={formData[isSignUp ? "fullName" : "email"]}
            onChange={handleChange}
            style={{ width: '100%', maxWidth: '400px', margin: '10px' }}
          />
          {isSignUp && ( // Show additional email field only during sign-up
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
            type={showPassword ? 'text' : 'password'} // Toggle password visibility
            label={isSignUp ? 'Create Password' : 'Password'} // Conditional label based on sign-up or login
            required
            name={isSignUp ? 'password' : 'password'} // Conditional name based on sign-up or login
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', maxWidth: '400px', margin: '10px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <div style={{ marginTop: '20px', width: '100%', maxWidth: '400px' }}>
            <Button type="submit" variant="contained" color="primary" style={{ width: '100%', borderRadius: '30px' }}>
              {isSignUp ? "Sign up" : "Login"} {/* Conditional button text */}
            </Button>
          </div>
         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
  <Link onClick={() => toggleSignUp(!isSignUp)} style={{ color: 'blue' }}>
    {isSignUp ? 'Back to Login' : 'Sign up'}
  </Link>
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
