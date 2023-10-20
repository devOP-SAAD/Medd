import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function LoginPage({ setAuthenticated, authenticated }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password) => {
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    validateEmail(email);
    validatePassword(password);

    if (emailError || passwordError) {
      return;
    }

    if (isSignUp) {
      // Sign-up logic
      const newRegisteredUsers = [...registeredUsers, formData];
      localStorage.setItem('registeredUsers', JSON.stringify(newRegisteredUsers));
      console.log('Signup data:', formData);
      alert('Signup successful. Please login.');

      setFormData({
        fullName: '',
        email: '',
        password: '',
      });
    } else {
      // Login logic
      const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      const matchingUser = storedUsers.find(
        (user) => user.email === email && user.password === password
      );
      if (matchingUser) {
        setAuthenticated(true);
        console.log('Login data:', formData);
        navigate('/Dashboard');
      } else {
        console.log('Login data:', formData);
        alert('Incorrect email or password. Please try again.');
      }
    }
  };

  return (
    <div className="main-container">
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }} onSubmit={handleSubmit}>
        <TextField
          label={isSignUp ? 'Full Name' : 'Email'}
          required
          name={isSignUp ? 'fullName' : 'email'}
          value={formData[isSignUp ? 'fullName' : 'email']}
          onChange={handleChange}
          onBlur={(e) => validateEmail(e.target.value)} // Validate email on blur
          error={emailError !== ''}
          helperText={emailError}
          style={{ margin: '10px', width: '100%', background: 'rgb(255 255 255)' }}
        />
        {isSignUp && (
          <TextField
            label="Email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={(e) => validateEmail(e.target.value)} // Validate email on blur
            error={emailError !== ''}
            helperText={emailError}
            style={{ margin: '10px', width: '100%', background: 'white' }}
          />
        )}
        <TextField
          type={showPassword ? 'text' : 'password'}
          label={isSignUp ? 'Create Password' : 'Password'}
          required
          name={isSignUp ? 'password' : 'password'}
          value={formData.password}
          onChange={handleChange}
          onBlur={(e) => validatePassword(e.target.value)} // Validate password on blur
          error={passwordError !== ''}
          helperText={passwordError}
          style={{ margin: '10px', width: '100%', background: 'white' }}
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

        <div style={{ marginTop: '10px', width: '100%' }}>
          <Button type="submit" variant="contained" color="primary" style={{ borderRadius: '30px', width: '100%' }}>
            {isSignUp ? 'Sign up' : 'Login'}
          </Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', width: '100%' }}>
          <Link onClick={toggleSignUp} style={{ color: 'coral' }}>
            {isSignUp ? 'Back to Login' : 'Sign up'}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
