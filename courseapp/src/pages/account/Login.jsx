import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../components/header/Header';
import Footer from '../../components/layout/Footer';
import Swal from 'sweetalert2';
import axios from 'axios';


const theme = createTheme();

function Login() {

  const navigate = useNavigate();

  const url = 'https://localhost:7184';

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    function parseJwt(token) {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(jsonPayload);
    };

    const exsistUser = {
      email: Email,
      password: Password
    };

    const formData = new FormData();
    for (const [key, value] of Object.entries(exsistUser)) {
      formData.append(key, value);
    };

    await axios.post(`${url}/api/Account/Login`, formData, {
      headers: {
        Accept: "*/*"
      }
    })
      .then((res) => {
        if (res.status === 200 || res.data.status == "success") {
          let userDecode = parseJwt(res.data)[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ];
          if (userDecode === "Member") {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'You are not authorized to access this page',
              showConfirmButton: false,
              timer: 1500
            });
          }else{
            localStorage.setItem("token", JSON.stringify(res.data));
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Signed in succesfully!',
              showConfirmButton: false,
              timer: 1500
            });
            navigate("/");
          }
        } else {
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Email or password is wrong!',
            showConfirmButton: false,
            timer: 1500
          });
          console.log(res);
        }
      })
  };

  return (
    <>
      <Navbar />
      <Header sectionHeader="Login" />
      <div className='container my-5'>
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: 'url(./images/study1-1024x666.jpeg)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: '#ffb606' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Login
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="off"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    style={{ background: '#ffb606' }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/Register" href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
      <Footer />
    </>

  );
}
export default Login;
