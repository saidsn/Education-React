import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Navbar from '../../components/layout/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/layout/Footer';
import Swal from 'sweetalert2';
import axios from 'axios';



function ForgotPassword() {

  const url = 'https://localhost:7184';

  const [Email, setEmail] = useState("");

  const newEmail = {
    email: Email
  };

  async function SendMail(e) {
    e.preventDefault();

    const formData = new FormData();
    for (const [key, value] of Object.entries(newEmail)) {
      formData.append(key, value);
    };

    await axios.post(`${url}/api/Account/ForgotPassword`, formData, {
      headers: {
        Accept: "*/*"
      }
    })
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Please check your email",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Omething went wrong',
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

  return (
    <>
      <Navbar />
      <Header sectionHeader="ForgotPassword" />
      <div className='container my-5'
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant="h5" style={{ textAlign: 'center' }}>
          Send Email
        </Typography>
        <Box component="form" noValidate onSubmit={(e) => SendMail(e)} style={{ width: '25rem' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="on"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            style={{ background: '#ffb606' }}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send
          </Button>
        </Box>
      </div>
      <Footer />
    </>
  );
}

export default ForgotPassword;
