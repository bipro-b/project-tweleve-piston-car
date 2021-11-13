import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/banner.png'
import './Bannner.css'

const Banner = () => {
    return (
        <Container>
            <Grid container spacing={5}>
                <Grid sx={{ textAlign: 'left' }} item sm={12} md={4}>
                    <h3>Car store</h3>
                    <h4>Welcome to our PISTON CAR STORE </h4>
                    <p>
                        You will get differnet types of car in our shop. Those cars are imported from JAPAN.
                        The services of our product is unique according to feedback of our customrer .
                        You can purchase according to your choice.
                        Best of luck.
                    </p>
                    <Link style={{ textDecoration: 'none' }} to="/cars"> <Button variant="contained">All Services</Button></Link>
                </Grid>

                <Grid className="banner-container" item sm={12} md={8}>

                    <img style={{ width: '75%' }} src={banner} alt="" />
                </Grid>

            </Grid>
        </Container >
    );
};

export default Banner;