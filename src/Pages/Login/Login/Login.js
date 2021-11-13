import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        // alert('Submit successfully')
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ marginTop: '50px' }}>
                <Grid item sm={12} >
                    <Typography variant="body1" gutterBottom>
                        Login
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic" label="Your Email"
                                name="email"
                                onBlur={handleOnchange}
                                type="email"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic" label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnchange}
                                variant="standard" />
                            <Button
                                sx={{ width: '75%', m: 1 }}
                                type="submit"
                                variant="contained">Login</Button>
                            <NavLink style={{ textDecoration: 'none' }} to="register"><Button variant="text">Are you New User? Please Register</Button></NavLink>
                        </form>
                        <p>....................</p>
                        <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                    </Typography>
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">Login Successfully!!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;