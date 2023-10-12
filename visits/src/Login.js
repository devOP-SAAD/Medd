import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Link } from '@mui/material';
import axios from 'axios';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://mocki.io/v1/702b020c-b344-4a78-a7ac-62ccbd9e47f0');
      const users = response.data;

      const user = users.find((user) => user.username === username && user.password === password);

      if (user) {
        // Authentication successful
        // You can save the user's information (e.g., user ID) to local storage or global state.
        localStorage.setItem('userId', user.id);
        // Redirect to the dashboard or another page upon successful login.
        // Replace '/dashboard' with your desired route.
        alert(username + '  login sucessfully');

        // Clear the input fields
        setUsername('');
        setPassword('');
      } else {
        setLoginError('Invalid username or password. Please try again.');
      }
    } catch (error) {
      setLoginError('An error occurred while attempting to log in. Please try again.');
    }
  };

  return (
    <Grid container xs={12} lg={12}  style={{ height: '650px' }}>
     
    <Grid   xs={12} lg={6} style={{background:'#01619B'}}>
      <Typography><span style={{fontSize:'30px',color:'white',fontFamily:'serif'}}>Welcome to the <br/>MEDIREMOTE</span></Typography>
    </Grid>





      <Grid xs={12} md={6} lg={6}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '87vh',margin:'10px' }}>
          <form sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }} onSubmit={handleLogin}>
          <Grid style={{display:'flex', justifyContent:'center' , paddingBottom:'50px'}}>
          <img src={process.env.PUBLIC_URL + '/1.png'} alt='MediRemote' style={{  marginRight: '10px', width:'300px' ,  height:'100%' }} />
          </Grid>
          <TextField
              label="Username"
              fullWidth
              required
              style={{ margin: '10px' }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              type="password"
              label="Password"
              fullWidth
              required
              style={{ margin: '10px' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div sx={{ marginTop: 2 }}>
              <Button type="submit" variant="contained" color="primary" fullWidth style={{ margin: '10px' }}>
                Login
              </Button>
            </div>
            <div style={{ display:'flex' ,  justifyContent:'center'}}>
            {loginError && <Typography  color="error">{loginError}</Typography>}
            </div>
          </form>
          
       
        </div>
        
      </Grid>
    </Grid>
  );
}

export default LoginPage;
